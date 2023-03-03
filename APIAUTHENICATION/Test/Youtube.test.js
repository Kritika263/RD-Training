describe("Date converter function", function () {
  it("checks for date format", function () {
    expect(convertDateFormat("2023-02-16T12:30:21Z")).toEqual("February 16, 2023");
  });
  it("checks for date format", function () {
    expect(convertDateFormat("2019-02-25T12:28:19Z")).toEqual("February 25, 2019");
  });
  it("checks for Views format", function () {
    expect(ViewsConverter("61028")).toEqual("61k");
  });
  it("checks for Views format", function () {
    expect(ViewsConverter("18300000")).toEqual("18.3M");
    expect(ViewsConverter("183")).toEqual("183");
  });
  it("checks for html", function () {
    const data = {
      snippet: {
        pusblishedAt: "2023-02-16T12:30:21Z",
        channelTitle: "random",
        title: " ",
        thumbnails: {
          medium: {
            url: ""
          }
        },
        description: ""
      },
      statistics: { viewCount: "18300000" },
      id: "456",
    }
    spyOn(window, 'convertDateFormat');
    const card = showCard(data);
    document.body.append(card);
    const a = document.querySelectorAll('.thumbnail').length;
    expect(convertDateFormat).toHaveBeenCalled();
    expect(a).toEqual(1);
  });

});
describe('Buttons Functions', () => {
  beforeEach(() => {
    currentPage = 3;
  });
  it('should call updateCards function', () => {
    spyOn(window, 'updateCards');
    prevBtn();
    expect(updateCards).toHaveBeenCalled();
    expect(currentPage).toEqual(2);
  });
  it('should call updateCards function', () => {
    spyOn(window, 'updateCards');
    nextBtn();
    expect(updateCards).toHaveBeenCalled();
    expect(currentPage).toEqual(4);
  });
  it('should call updateCards function', () => {
    spyOn(window, 'updateCards');
    pageUpdate("1");
    expect(updateCards).toHaveBeenCalled();
    expect(currentPage).toEqual(1);
  });
});
describe('ButtonsStyle function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div id="page1"></div>
            <button id="prevsBtn" class=""></button>
            <button id="nextBttn" class=""></button>
          `;
  });
  it('should add "active" class to the current page button', () => {
    currentPage = 1;
    ButtonsStyle(currentPage);
    expect(document.getElementById('page1').classList.contains('active')).toBe(true);
  });

  it('should add "disabled" class to the previous button if on the first page', () => {
    currentPage = 1;
    ButtonsStyle(currentPage);
    expect(document.getElementById('prevsBtn').classList.contains('disabled')).toBe(true);
  });
  it('should add "disabled" class to the next button if on the last page', () => {

    videoData = ['video1', 'video2', 'video3', 'video4', 'video5'];
    itemsPerPage = 2;
    currentPage = Math.ceil(videoData.length / itemsPerPage);
    ButtonsStyle(currentPage);
    expect(document.getElementById('nextBttn').classList.contains('disabled')).toBe(true);
  });

  it('should remove "disabled" class from the previous button if not on the first page', () => {
    currentPage = 2;
    ButtonsStyle(currentPage);
    expect(document.getElementById('prevsBtn').classList.contains('disabled')).toBe(false);
  });
  it("Test for update Cards Pangination function", function () {
    const spy = spyOn(window, 'ButtonsStyle');
    GeneratePagination();
    expect(spy).toHaveBeenCalled();
  });
});
describe('GeneratePagination', () => {
  videoData, itemsPerPage;
  beforeEach(() => {
    videoData = ['video1', 'video2', 'video3', 'video4', 'video5', 'video6'];
    itemsPerPage = 2;
  });

  it('should generate pagination buttons', () => {

    const pagesContainer = document.createElement('div');
    pagesContainer.id = 'pagination';
    document.body.appendChild(pagesContainer);
    GeneratePagination();
    expect(pagesContainer.innerHTML).toContain('<li id="prevsBtn">');
    expect(pagesContainer.innerHTML).toContain('<li id="nextBttn">');
    expect(pagesContainer.innerHTML).not.toContain('<li class="page-item numberButtons" id="page4">');
  });
  it("Test for update Cards Pangination function", function () {
    spyOn(window, 'GeneratePagination');
    updateCards();
    expect(GeneratePagination).toHaveBeenCalled();
  });
});
describe('fetchData', () => {
  it('should fetch data from the YouTube API', async () => {
    const mockResponse = {
      items: [
        {
          id: { videoId: 'abc123' },
          snippet: { title: 'Test video' },
          statistics: { viewCount: 1000 },
        },
        {
          id: { videoId: 'def456' },
          snippet: { title: 'Another test video' },
          statistics: { viewCount: 2000 },
        },
      ],
    };
    spyOn(window, 'updateCards')
    spyOn(window, 'fetch').and.resolveTo(Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    }));
    new Response(mockResponse);

    await fetchData('test');
    expect(window.fetch).toHaveBeenCalledWith(jasmine.any(String));
    expect(videoData.length).toBe(mockResponse.items.length);
    expect(videoData[0].id).toEqual(mockResponse.items[0].id);
    expect(videoData[1].snippet.title).toEqual(mockResponse.items[1].snippet.title);
  });
});
