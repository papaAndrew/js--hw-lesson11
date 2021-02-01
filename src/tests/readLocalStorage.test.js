import readLocalStorage from "../js/api/readLocalStorage";

describe("Testing functions readLocalStorage and writeLocalStorage which executes io-operations with localStorage", () => {
  const [KEY, VALUE] = ["foo", "bar"];

  beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
  });

  it("claims that readLocalStorage executes reading from localStorage", () =>
    readLocalStorage(KEY, () =>
      expect(localStorage.getItem).toHaveBeenCalledWith(KEY)
    ));

  it(`claims that function is thenable and can read Value ${VALUE} by Key ${KEY} stored before`, () => {
    localStorage.setItem(KEY, VALUE);
    return readLocalStorage(KEY, (data) => expect(data).toBe(VALUE));
  });
});
