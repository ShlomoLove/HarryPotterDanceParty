var MakeSnapeDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('snapeDancer');
    this.$node.prepend('<img class=snapeDancer src="Snape2.png" />');
  };
  
  
  MakeSnapeDancer.prototype = Object.create(MakeDancer.prototype);
  MakeSnapeDancer.prototype.constructor = MakeSnapeDancer;
  
  MakeSnapeDancer.prototype.step = function() {
      MakeDancer.prototype.step.call(this);
      this.$node.toggle();
  };