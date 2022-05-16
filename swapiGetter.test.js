import { DataProvider } from "./dataProvider";
import { Api } from "./Api.js";

//jest.mock("./Api.js");

// mockSwapi.getPersonById.getPersonById({ data: { name: "Mock Jedi" } });

describe("swapiGetter", () => {
  let provider;
  beforeEach(() => {
    provider = new DataProvider();
  })

  afterEach(jest.clearAllMocks);

  test("should return a name", async () => {

    jest.spyOn(Api, 'getPersonById').mockReturnValue({ name: "Luke Skywalker" });


    const yodaName = await provider.getNameWithYodaFilter(1);

    const expected = "Skywalker Luke";


    expect(yodaName).toBe(expected);
  });
});
