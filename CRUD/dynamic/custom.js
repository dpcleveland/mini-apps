document.addEventListener('DOMContentLoaded', function() {

    function setUserName() {
        // make dynamic
        var userName = "Daniel";
        return userName;
    }

    function setRESTLink(user) {
        var userRESTLink = 'http://rest.learncode.academy/api/' + username + '/crud';

        return userRESTLink;
    }

    function showTasks() {
        $.ajax({
            type: 'GET',
            url: 'http://rest.learncode.academy/api/' + username + '/crud',
            success: function(data) {
                console.log("I have tasks!", data);
            }
        });
    }

    function addTask() {
        $.ajax({
            type: 'POST',
            url: 'http://rest.learncode.academy/api/dpcleveland/crud',
            data: {
                name: 'Billy Bob',
                age: 27
            },
            success: function(data) {
                console.log("Friend added!", data); //the new item is returned with an ID
            }
        });
    }

});
