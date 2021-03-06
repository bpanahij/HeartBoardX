var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('load', this.onLoad, false);
    document.addEventListener('deviceready', this.onDeviceReady, true);
    window.addEventListener("orientationchange", orientationChange, true);
  },
  onLoad: function() {
  },
  onDeviceReady: function() {
    angular.element(document).ready(function() {
      angular.bootstrap(document);
    });
  }
};