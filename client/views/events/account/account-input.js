/**
 * params:
 *  model: {Hash}
 *  name: {String}
 */

Template.AccountInput.helpers({
 _label: function() {
   var defalutLabel = s.underscored(this.name).replace(/_/g, ' ').toUpperCase();
   return this.label || defalutLabel;
 },
 _value: function() {
   return this.model[this.name];
 },
});
