import todo from "../assets/images/icon-todo.svg";
import calendar from "../assets/images/icon-calendar.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";

export const navigationItems = [
  {
    id: "features-nav-cat",
    category: "Features",
    subCategories: [
      { id: "to-do-list-nav-sub", category: "Todo List", icon: todo },
      { id: "calendar-nav-sub", category: "Calendar", icon: calendar },
      { id: "reminders-nav-sub", category: "Reminders", icon: reminders },
      { id: "planning-nav-sub", category: "Planning", icon: planning },
    ],
  },
  {
    id: "company-nav-cat",
    category: "Company",
    subCategories: [
      { id: "history-nav-sub", category: "History", icon: null },
      { id: "our-team-nav-sub", category: "Our Team", icon: null },
      { id: "blog-nav-sub", category: "Blog", icon: null },
    ],
  },
  { id: "careers-nav-cat", category: "Careers", subCategories: null },
  { id: "about-nav-cat", category: "About", subCategories: null },
];
