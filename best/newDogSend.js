const SubmitView = Backbone.View.extend({
  className: 'dogsubmit',
  
  render: function(){
    this.$el.html('');
      this.$el.append(`
        <div class="container">
          <div class="logo"> </div>
          <form class="submitForm cf" id="submitForm">
            <input type="button" id="upload" class="uploadButton">
            <input type="text" id="name" placeholder="Dog's Name" class="name">
            <input type="text" id="breed" placeholder="Breed" class="breed">
            <input type="text" id="description" placeholder="Description" class="description">
            <input type="button" class="submitButton" value="SUBMIT" name="submit">
          </form>
          <footer>
           <h2> MAY THE BEST DOG WIN </h2>
        </footer>
        </div>
        `);
        return this;
  },
  newDogSend: function(e){
    e.preventDefault();
    store.dogList.create({
      name: $('#newdogname').val(),
      breed: $('#newdogbreed').val(),
      description: $('#newdogdescription').val(),
    });
  }


})



export default SubmitView;
