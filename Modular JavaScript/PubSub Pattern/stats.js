var stats = (function() {
    var tasks = 0;

    // cache DOM
    var $stats = $('#statsModule');
    var template = $('#stats-template').html();

    events.on('tasksChanged', setTasks);
    render();

    function render() {
        $stats.html(Mustache.render(template, {tasks: tasks}));
    }

    function setTasks(newTasks) {
        tasks = newTasks;
        render();
    }

    function destroy() {
        $stats.remove();
        events.off('tasksChanged', setTasks);
    }

    return {
        destroy: destroy
    };

})();
