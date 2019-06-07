// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import {sendWithService} from 'backend/sendGrid';
import {fetch} from 'wix-fetch';  
import {sendEmail} from 'backend/email';


$w.onReady(function () {
	//TODO: write your page related code here...

});

export function Submit_click(event) {
	let name = $w('#input1').value;
	let fromEmail = $w('#input2').value;
	let subject = $w('#input3').value;
	let body = $w('#textBox2').value;
	sendFormData(name, fromEmail, subject, body);	
}


export function sendemail(subject, body) {
  const key = "QL.cFH5YHZQQ2_fG0z_KuQ.6WPTYEyjN1C3_7Wt9Hb3jGfkJNAyzJhz3ddhM";
  const sender = "from.email@domain.com";
  const recipient = "to.email@domain.com";
  return sendWithService(key, sender, recipient, subject, body);
}

export function sendwithService(key, sender, recipient, subject, body) {
  const url = "https://api.sendgrid.com/api/mail.send.json";
 
  const headers = {
    "Authorization": "Bearer " + key,
    "Content-Type": "application/x-www-form-urlencoded"
  };

  const data = `from=${sender}&to=${recipient}&subject=${subject}&text=${body}`;
 
  const request = {
    "method": "post", 
    "headers": headers, 
    "body": data
  };
 
  return fetch(url, request)
   .then(response => response.json());
}

  sendEmail(subject, body)
    .then(response => console.log(response)); 
}
