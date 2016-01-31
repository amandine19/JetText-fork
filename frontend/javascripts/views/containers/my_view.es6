class ContainersMy extends ApplicationView {
  render() {
  	$('#outlet').prepend('<h1>My from js</h1>');
    console.log("my-view");
  }
}