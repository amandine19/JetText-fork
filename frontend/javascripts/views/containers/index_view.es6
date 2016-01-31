class ContainersIndex extends ApplicationView {
  render() {
    $('h1').first().append(' from js');
    $('#outlet').css({"color":"red"});

    var p = new ContainersIndexPart();
    p.testTry();
    console.log("index-view");
    $('#tester').click(function(){
      console.log("ko");
    })   
  }
}

class ContainersIndexPart extends ContainersIndex {
  testTry() {
    console.log("index-view-part");
  }
}