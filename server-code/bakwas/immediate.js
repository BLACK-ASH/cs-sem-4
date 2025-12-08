console.log("First");
setImmediate(() => {
    console.log(`Immediate:Middle`);
});
console.log("Last");