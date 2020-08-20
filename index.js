XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
let url;
document.addEventListener('yourCustomEvent', function (e)
{
    url = e.detail;
});

const newSend = function(vData) {
    const data = JSON.parse(vData)

 if(data[0].name === "jira.frontend.fe.software.board.issue.move" && data[0].properties.newColumnIndex == 5) { 
  const audio = new Audio(url);
  audio.play();
}

this.realSend(vData); 
};
XMLHttpRequest.prototype.send = newSend;

