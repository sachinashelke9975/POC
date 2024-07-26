import { Page } from "playwright/test";
import LoginPage from "../page-objects/login";
import Base from "./base";
import HomePage from "../page-objects/home";
import ProfilePage from "../page-objects/profile";



export default class AppPages extends Base {
  loginPage: LoginPage;
  homePage: HomePage;
  profilePage: ProfilePage;

  
  constructor(page: Page){
    super(page)
    this.loginPage = new LoginPage(page)
    this.homePage = new HomePage(page)
    this.profilePage = new ProfilePage(page)
 

  }
}
