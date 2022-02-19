// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import Rails from "@rails/ujs"
import 'jquery'
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "@hotwired/turbo-rails"
import "controllers"
import '@doabit/semantic-ui-sass'
import './channels'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

window.scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight)
  }
}

submit_message = function() {
  $('#message_body').on('keydown', function(e) {
    if (e.keyCode == 13) {
      $('button').click();
      e.target.value = "";
    };
  });
};

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });
    submit_message();
    scroll_bottom();
  })
