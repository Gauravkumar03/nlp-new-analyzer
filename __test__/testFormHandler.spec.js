import { fetchData } from '../src/client/js/formHandler'; // Import the fetchData function


// Mocking the fetch function globally to simulate API responses
global.fetch = jest.fn();

describe('fetchData', () => {
  it('should fetch data successfully', async () => {
    // Mock a successful response for the fetch API
    const mockResponse = [
      { userId: 1, id: 1, title: "Mock Post 1", body: "This is a mock post." },
      { userId: 2, id: 2, title: "Mock Post 2", body: "This is another mock post." },
    ];

    // Setup the mock fetch to resolve with a mock response
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    // Call fetchData function
    const data = await fetchData();

    // Verify that the fetch function was called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');

    // Verify that the fetched data is correct
    expect(data).toEqual(mockResponse);
  });

  it('should throw an error when fetch fails', async () => {
    // Setup the mock fetch to simulate a failed request
    fetch.mockRejectedValueOnce(new Error('Failed to fetch data'));

    // Expect the fetchData function to throw an error
    await expect(fetchData()).rejects.toThrow('Failed to fetch data');
  });
});



