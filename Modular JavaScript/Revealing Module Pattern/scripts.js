// Revealing Module Pattern
// https://www.youtube.com/watch?v=pOfwp6VlnlM&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=3
/*
The revealing module pattern - where we expose an API allowing modules to talk to each other. This works well for smaller amounts of modules, but can have issues when many modules need to talk to each other.

We write a revealing module pattern by starting with a self-executing anonymous function also known as an IIFE (immediately invoked function expression).

This runs a function and sets its return value as our module's value. If we return an object of methods, then those methods are what other modules have "public" access to. What's nice about this, is we can create any variables within the function and no other modules have access to them unless we expose them via our return object.
*/

var tasks = (function() {
    var tasks = ['Clean', 'Shop'];

    // cache DOM
    var $el = $('#tasksModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#tasks-template').html();

    // bind events
    $button.on('click', addTask);
    $ul.delegate('i.del', 'click', deleteTask);

    render();

    function render() {
        $ul.html(Mustache.render(template, {tasks: tasks}));
    }

    function addTask(value) {
        var name = (typeof value === "string") ? value : $input.val();
        tasks.push(name);
        render();
        $input.val('');
    }

    function deleteTask(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);

        }
        tasks.splice(i, 1);
        render();
    }

    return {
        addTask: addTask,
        deleteTask: deleteTask
    };
})();
