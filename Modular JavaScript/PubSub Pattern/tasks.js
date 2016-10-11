// PubSub Pattern
// Also known as "Mediator" or "Events"
// https://www.youtube.com/watch?v=nQRXi1SVOow&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=4
/*
The pubsub design pattern (publish/subscribe), allows us to decouple our modules. Once integrated with our pubsub module, they can emit events and not have to worry about which modules depend on them. Modules can subscribe to events and be notified when any module publishes.
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
        // Examples below of why it would be hard to scale with multiple modules in large application
        // stats.setTasks(tasks.length);
        // header.updateCount({ count: tasks.length });
        // footer.change(tasks.length);
        events.emit('tasksChanged', tasks.length);
    }

    function addTask(value) {
        var name = (typeof value === 'string') ? value : $input.val();
        tasks.push(name);
        render();
        $input.val('');
    }

    function deleteTask(event) {
        var i;
        if (typeof event === 'number') {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        tasks.splice(i, 1);
        render();
    }
})();
