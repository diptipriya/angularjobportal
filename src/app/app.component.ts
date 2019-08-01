import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'indeed';
 jobsdata;
 mumbai;
 pune;
 

constructor(public http:HttpClient){

}

ngOnInit(){

}



getjoball()
{

  this.http.get('http://localhost:8888/jobportal/readdata.php').subscribe(
    data => {
      
      this.jobsdata = data as string;
      console.log('Data fetched is successful ', data);
    },
    error => {
      console.log('Error', error);

}
  );
}

getjob(mumbai)
{
  this.http.post('http://localhost:8888/jobportal/filterdata.php', 
  {"location": mumbai}).subscribe(
  
    data => {
      this.jobsdata = data as string;
      console.log('Data fetched is successful ', data);
    },
    error => {
      console.log('Error', error);

}
  );
}


getjobpune(pune)
{
  this.http.post('http://localhost:8888/jobportal/filterdata.php', 
  {"location": pune}).subscribe(
  
    data => {
      this.jobsdata = data as string;
      console.log('Data fetched is successful ', data);
    },
    error => {
      console.log('Error', error);

}
  );
}

}
