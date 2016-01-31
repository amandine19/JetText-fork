class ContainersIndex extends ApplicationView {

  render() {
    $('h1').first().append(' from js');
    $('#outlet').css({"color":"red"});
    console.log("index-view");
  }

}