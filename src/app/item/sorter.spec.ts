import { sortChildren } from "./sorter";

type TestStory = {
  children: TestStory[];
};

const child = () => new TestBuilder();

// Builds TestStories
class TestBuilder {
  story: TestStory = { children: [] };

  withChild(story: TestBuilder): TestBuilder {
    this.story.children.push(story.story);
    return this;
  }
}

describe("sortStory", () => {
  it("sorts stories byResponseCount", () => {
    const res = sortChildren(
      child().withChild(child()).withChild(child().withChild(child())).story,
      {
        byResponseCount: true,
        byThreadLength: false,
      }
    );
    expect<TestStory>(res).toMatchObject(
      child().withChild(child().withChild(child()).withChild(child())).story
    );
  });
  it("sorts stories byThreadLength", () => {
    const res = sortChildren(
      child()
        .withChild(
          child()
            .withChild(child())
            .withChild(child())
            .withChild(child())
            .withChild(child())
        )
        .withChild(child().withChild(child().withChild(child()))).story,
      {
        byResponseCount: false,
        byThreadLength: true,
      }
    );
    expect<TestStory>(res).toMatchObject(
      child()
        .withChild(child().withChild(child().withChild(child())))
        .withChild(
          child()
            .withChild(child())
            .withChild(child())
            .withChild(child())
            .withChild(child())
        ).story
    );
  });
});
