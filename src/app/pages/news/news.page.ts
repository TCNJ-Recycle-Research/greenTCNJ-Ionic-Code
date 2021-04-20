import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { NewsModalPage } from '../news-modal/news-modal.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  

  ngOnInit() {
  }

  news: {articleID: any, title: any, author: any, text: any, datePublished: any}[] = [];

  type: string; // used to initialize tab to the view all page 

  constructor(private router: Router, public http: HttpClient, private modalCtrl: ModalController) {

      this.getAllnews();
      this.type = 'all';
  }

  getAllnews() {
          
    var obj = {func: "get_all_articles"};

    this.http.post("https://recycle.hpc.tcnj.edu/php/news-handler.php", JSON.stringify(obj)).subscribe(data => {

        var result = data as any[];

        for(var i = 0; i < result.length; i++){
          this.news.push({articleID: result[i]["articleID"], title: result[i]["articleTitle"], author: result[i]["articleAuthor"], 
                          text: result[i]["articleText"], datePublished: result[i]["publishDate"]});
        }
    });

  }

  ionViewWillEnter() {
    setTimeout(() => {
      // this.data = {
      //   'heading': 'Article Title',
      //   'para1': 'Lorem ipsum dolor sit amet, consectetur',
      //   'para2': 'date uploaded.'
      // };
      this.news;
      console.log(this.news);
    }, 5000);
  }

  async onArticleSelected(news) {

    const modal = await this.modalCtrl.create({
      component: NewsModalPage,
      componentProps:{
        newsObj: news,
        newsID: news.articleID,
        newsTitle: news.title,
        newsAuthor: news.author,
        newsDescription: news.text,
        newsDatePublished: news.datePublished
      }
    });
   
    await modal.present();

  }

}
