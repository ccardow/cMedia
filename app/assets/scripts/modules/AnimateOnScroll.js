import $ from "jquery";
import waypoints from "waypoints/lib/noframework.waypoints";

class AnimateOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.hideInitially();
    this.offsetPercentage = offset;
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    const that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          // $(currentItem).addClass("reveal-item--is-visible");
          $(currentItem).addClass("skillBarValue--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default AnimateOnScroll;
