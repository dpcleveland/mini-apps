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
