import readLocalStorage from "../js/api/readLocalStorage";

describe("Testing functions readLocalStorage and writeLocalStorage which executes io-operations with localStorage", () => {
  const [KEY, VALUE] = ["foo", "bar"];

  afterEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
  });

  it("claims that readLocalStorage can read from localStorage", async () => {
    await readLocalStorage(KEY);

    expect(localStorage.getItem).toHaveBeenCalledWith(KEY);
  });

  it(`claims that function can read Value ${VALUE} by Key ${KEY} stored before`, async () => {
    const reject = jest.fn();
    const resolve = jest.fn();

    localStorage.setItem(KEY, VALUE);
    await readLocalStorage(KEY, resolve, reject);

    expect(resolve).toHaveBeenCalledWith(VALUE);
    expect(reject).not.toHaveBeenCalled();
  });
});
