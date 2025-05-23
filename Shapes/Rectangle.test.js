const Rectangle = require('./Rectangle');

test("Test that you can get the correct area of rectangle.", ()=>{
    const rectangleTest = new Rectangle("dog", 10, 10);
    expect(rectangleTest.getArea()).toBe(100);
    expect(rectangleTest.isSquared()).toBe(true);
    expect(rectangleTest.getName()).toBe("Rectangle");
})