var MakeVoldemortDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('voldemortDancer');
    this.$node.prepend('<img class=voldemortDancer src="Voldemort2.png" />');
    //var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
  };
  
  
  MakeVoldemortDancer.prototype = Object.create(MakeDancer.prototype);
  MakeVoldemortDancer.prototype.constructor = MakeVoldemortDancer;
  
  MakeVoldemortDancer.prototype.step = function() {
      // call the old version of step at the beginning of any call to this new version of step
      MakeDancer.prototype.step.call(this);
      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag.
      this.$node.toggle();
  };