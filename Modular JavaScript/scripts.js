// Revealing Module Pattern
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


/*
// Object literal model
(function() {

    var tasks = {
        tasks: ['Get milk', 'Get cereal'],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            this.$el = $('#tasksModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#tasks-template').html();
        },
        bindEvents: function() {
            this.$button.on('click', this.addTask.bind(this));
            this.$ul.delegate('i.del', 'click', this.deleteTask.bind(this));
        },
        render: function() {
            var data = {
                tasks: this.tasks,
            };
            this.$ul.html(Mustache.render(this.template, data));
        },
        addTask: function(value) {
            this.tasks.push(value || this.$input.val());
            this.render();
            this.$input.val('');
        },
        deleteTask: function(event) {
            var $remove = $(event.target).closest('li');
            var i = this.$ul.find('li').index($remove);

            this.tasks.splice(i, 1);
            this.render();
        }
    };

    tasks.init();
})();
*/
