import writeLocalStorage from "../js/api/writeLocalStorage";

describe("Testing functions readLocalStorage and writeLocalStorage which executes io-operations with localStorage", () => {
  const [KEY, VALUE] = ["foo", "bar"];

  beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
  });

  it("claims that writeLocalStorage executes writing to localStorage", async () => {
    await writeLocalStorage(KEY, VALUE);

    expect(localStorage.setItem).toHaveBeenCalledWith(KEY, VALUE);
  });

  it(`claims that function writeLocalStorage is thenable and can write Value ${VALUE} with Key ${KEY}`, async () => {
    const resolve = jest.fn();
    const reject = jest.fn();

    await writeLocalStorage(KEY, VALUE, resolve, reject);

    expect(localStorage.getItem(KEY)).toBe(VALUE);
  });

  it(`claims that function writeLocalStorage calls back handler onResolve`, async () => {
    const resolve = jest.fn();
    const reject = jest.fn();

    await writeLocalStorage(KEY, VALUE, resolve, reject);

    expect(resolve).toHaveBeenCalled();
  });
});
