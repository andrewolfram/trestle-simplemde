//= require simplemde/simplemde

Trestle.SimpleMDE = {};

Trestle.init(function(e, root) {
  $('textarea.simplemde', root).each(function() {
    var options = $.extend({}, { element: this }, Trestle.SimpleMDE);
    var simplemde = new SimpleMDE(options);
    $(document).on("shown.bs.modal", ".modal", function () {
            simplemde.codemirror.refresh();
        }).on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
            simplemde.codemirror.refresh();
        })
  });
});
