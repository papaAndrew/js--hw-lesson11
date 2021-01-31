import getDataByHttpGet from "../js/api/getDataByHttpGet";

const rsOk = {
  ok: true,
  status: 200,
  statusText: "200 OK",
};

describe("Testing common function getDataByHttpGet", () => {
  it("calls back function with response containing property response.ok", () => {
    global.fetch = jest.fn(() => new Promise((resolve) => resolve(rsOk)));

    getDataByHttpGet(0, (response) => {
      expect("ok" in response).toBe(true);
    });
  });

  it("if fetch resolved, response.ok is true", () => {
    global.fetch = jest.fn(() => new Promise((resolve) => resolve(rsOk)));

    getDataByHttpGet(0, (response) => {
      expect(response.ok).toBe(true);
    });
  });

  it("if fetch rejected, response.ok is false", () => {
    // global.fetch = jest.fn(() => new Promise(resolve => reject({"ok": false})));
    jest
      .spyOn(global, "fetch")
      .mockImplementation(() => new Promise((reject) => reject()));

    getDataByHttpGet(0, (response) => {
      expect(response.ok).toBe(false);
    });
  });
});
