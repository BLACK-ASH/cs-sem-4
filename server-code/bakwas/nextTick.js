console.log("First");
process.nextTick(() => {
    console.log(`NextTick:Middle`);
});
console.log("Last");
