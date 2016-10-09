document.addEventListener('DOMContentLoaded', function() {

    function setUserName() {
        // make dynamic based on user input
        var userName = "Daniel";

        return userName;
    }

    function setRESTLink(userName) {

        var userRESTLink = 'http://rest.learncode.academy/api/' + userName + '/crud/';

        return userRESTLink;
    }

    var userRESTLink = setRESTLink(setUserName());

    function showTasks() {
        $.ajax({
            type: 'GET',
            url: userRESTLink,
            success: function(data) {
                console.log("I have tasks!", data);
            }
        });
    }

    function addTask() {
        $.ajax({
            type: 'POST',
            url: userRESTLink,
            data: {
                // Add dynamically
                task: 'Get milk',
                priority: 'Low'
            },
            success: function(data) {
                console.log("Task added!", data); //the new item is returned with an ID
            }
        });
    }

    function updateTask() {
        $.ajax({
            type: 'PUT',
            data: {
                task: 'Get cereal',
                priority: 'Low'
            },
            // Make ID dynamic
            url: userRESTLink + '1',
            success: function() {
                //no data...just a success (200) status code
                console.log('Task Updated Successfully!');
            }
        });
    }

    function deleteTask() {
        $.ajax({
            type: 'DELETE',
            // Make ID dynamic
            url: userRESTLink + '1',
            success: function() {
                //no data...just a success (200) status code
                console.log('Task Deleted Successfully!');
            }
        });
    }

});
