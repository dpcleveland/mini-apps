window.onload = function() {

    var meats = ["ham", "salami", "bacon"];

    console.log(meats); // ["ham", "salami", "bacon"]

    console.log(...meats); // ham salami bacon

    var nums1 = [1, 2, 3];
    var nums2 = [4, 5, 6];
    var nums3 = [...nums1, 4, 5, 6];
    var nums4 = [...nums1, ...nums2];

    console.log(nums3); // [1, 2, 3, 4, 5, 6]
    console.log(nums4); // [1, 2, 3, 4, 5, 6]



    function addNums(a, b, c) {
        console.log(a + b + c);
    }

    addNums(...nums1);
}
