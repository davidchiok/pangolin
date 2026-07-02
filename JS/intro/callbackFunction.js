/*
->Our own callback function
-›doing shape stuff
-----›shapes.
circle -> rectangle-› triangle->
1. for each of the shapes create a funciton<arrow, name› to calculate the area. ensure the function takes required parameters. test the function
2. we are create a super function called shape. its going to take the following params @param1=> function ‹correct shape› required @param2=>shape name‹string>
@param3=>s1 ‹required›
@param4=> s2<optional› @param5=>s3<optional›
1. inside your function shape.
console each of the parameters and theier types.
2. for each of your function ie for areacircle, areRectangle, and areaTriangle
call the shape function and pass the required params. example for areacircle
* - shape (areaCircle, "Circle", 10) -> for areCircle. test make observation
- shape (areaRectangle, "RectangLe"
,10,5) -> for areCircle. test make observation
*/
const areaCircle = (radius) => 3.142 * radius * radius;
const areaRectangle = (length. width) = length * width.











SOLUTIONS




// ---------- 1. Shape area functions ----------

const areaCircle = (radius) => 3.142 * radius * radius;

const areaRectangle = (length, width) => length * width;

const areaTriangle = (base, height) => 0.5 * base * height;

// Quick sanity tests
console.log("areaCircle(10):", areaCircle(10));          // 314.2
console.log("areaRectangle(10,5):", areaRectangle(10, 5)); // 50
console.log("areaTriangle(10,5):", areaTriangle(10, 5));   // 25


// ---------- 2. The "shape" super function ----------

function shape(shapeFn, shapeName, s1, s2, s3) {
  console.log(`--- ${shapeName} ---`);
  console.log("param1 (shapeFn):", shapeFn, "| type:", typeof shapeFn);
  console.log("param2 (shapeName):", shapeName, "| type:", typeof shapeName);
  console.log("param3 (s1):", s1, "| type:", typeof s1);
  console.log("param4 (s2):", s2, "| type:", typeof s2);
  console.log("param5 (s3):", s3, "| type:", typeof s3);

  // Call the passed-in function with only the args it actually needs
  const args = [s1, s2, s3].filter((a) => a !== undefined);
  const area = shapeFn(...args);

  console.log(`Area of ${shapeName}:`, area);
  return area;
}


// ---------- 3. Calling shape() for each function ----------

shape(areaCircle, "Circle", 10);
shape(areaRectangle, "Rectangle", 10, 5);
shape(areaTriangle, "Triangle", 10, 5);