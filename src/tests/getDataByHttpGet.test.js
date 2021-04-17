import fetchMock from "jest-fetch-mock";
import getDataByHttpGet from "../js/api/getDataByHttpGet";

fetchMock.enableMocks();

describe("Testing common function getDataByHttpGet", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("returns data if fetch has been resolved. fetch was called once", async () => {
    const dummy = { ok: true };
    fetchMock.mockResponseOnce(JSON.stringify(dummy));

    await expect(getDataByHttpGet("google")).resolves.toEqual(dummy);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual("google");
  });

  it("returns error if fetch has been rejected", async () => {
    fetchMock.mockRejectOnce(new Error("Rejected!"));

    await expect(getDataByHttpGet("google")).rejects.toThrow("Rejected!");
  });
});
