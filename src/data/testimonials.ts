export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  isFeatured: boolean;
  // TODO: replace with local file in /public/testimonials/ when available
  photoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "neeru-sharma",
    name: "Neeru Sharma",
    location: "New Zealand",
    rating: 5,
    isFeatured: true,
    text: "The best immigration consultant ever!! Credo Migration were very supportive and patiently listened to me and helped me in the best way to get my work permit in the most professional way. My consultant - Ms. Manisha Verma - special thank you so much for really supporting and guiding through the process, many hurdles and odd times!! But she encouraged and was helpful all the time. Thank you again!",
  },
  {
    id: "mj-singh",
    name: "Mj Singh",
    location: "New Zealand",
    rating: 5,
    isFeatured: true,
    text: "Started from Work visa. Because of incompetency of my previous lawyer I had to face a lot of problems then via a mutual friend I met with Manisha and today I will say thank you so much Manisha for helping us to settle down in this beautiful country. The professional knowledge and skills you are providing are transparent and efficient. Manisha knows how to tackle all sort of hurdles through a proper channel. Highly recommended Credo Migration!",
  },
  {
    id: "gurleen-kaur",
    name: "Gurleen Kaur",
    location: "New Zealand",
    rating: 5,
    isFeatured: true,
    text: "Really appreciate the guidance provided by Manisha. From my student visa and till Residency, she made all the steps very clear and understandable which made me achieve my goal. Did a great job! Highly recommended.",
  },
  {
    id: "simran-kang",
    name: "Simran Kang",
    location: "Auckland, NZ",
    rating: 5,
    isFeatured: true,
    text: "Thank you so much Manisha mam for helping us with our partnership residence visa. We really appreciate the effort and guidance you provided us. Some years ago, I felt very upset when I submitted my husband visa application through another lawyer as I received refusal. Afterward one of our friends recommended Credo Migration. Manisha mam assisted me in overcoming this challenging situation and I successfully got my husband visa with her support. I truly value her help and highly recommend to everyone Credo Migration Services.",
  },
  {
    id: "mankiran-sidhu",
    name: "Mankiran Sidhu",
    location: "New Zealand",
    rating: 5,
    isFeatured: false,
    text: "The efforts poured into each visa application is highly appreciated. Manisha, you continue working on our family visas since my husband's study visa then eventually family dependent visa in November 2016. I highly recommend Credo Migration Services. I can't forget your personal touch in your professional advice. Thanks again and will take services in future as well.",
  },
  {
    id: "sumit-mehta",
    name: "Sumit Mehta",
    location: "New Zealand",
    rating: 5,
    isFeatured: false,
    text: "Hi Manisha I want to thank you for the excellent work which you did in approving my 3 work visas and then the Permanent Residency too which I never thought I would get. I am so grateful for your dedication and professionalism which I got and would recommend people going through you.",
  },
  {
    id: "rajat-sehdev",
    name: "Rajat Sehdev",
    location: "New Zealand",
    rating: 5,
    isFeatured: false,
    text: "I would like to thank Manisha Mam. Because I have successfully got the work visa. You made things very easy for me. I am really happy with the advice and quick service. CREDO MIGRATION SERVICES LTD are the best advisor to get visa. It is the best place for best advice. Once again Thank you so much Manisha Mam.",
  },
  {
    id: "aman-sidhu",
    name: "Aman Sidhu",
    location: "New Zealand",
    rating: 5,
    isFeatured: false,
    text: "Really happy with my quick visa and the way my case was presented by Mam Manisha. Really helpful and I will for sure recommend it to all my friends. Thanks mam for taking my stress instead and making my life easy.",
  },
  {
    id: "soni-grewal-toor",
    name: "Soni Grewal Toor",
    location: "New Zealand",
    rating: 5,
    isFeatured: false,
    text: "Credo Migration took me out from stress every time. Yes, I applied for all my visas from Credo Migration and they helped me a lot in getting all my visas. I can say to trust 100 percent on Credo Migration because not only me, my friends whom I suggested to come and try from Credo they all get 100 percent positive results.",
  },
  {
    id: "ankur-sharma",
    name: "Ankur Sharma",
    location: "New Zealand",
    rating: 5,
    isFeatured: false,
    text: "Credo Migration is very good. I was so tensed but it took me out from stress in just few days. I think it has 100 percent result so just trust and follow the Credo Migration. Thanks to you!",
  },
  {
    id: "jack-jack",
    name: "Jack Jack",
    location: "New Zealand",
    rating: 5,
    isFeatured: false,
    text: "Thank Manisha so much for your service and support. Finally I got my residency!",
  },
  {
    id: "amrit-threeke",
    name: "Amrit Threeke",
    location: "New Zealand",
    rating: 5,
    isFeatured: false,
    text: "Thank you so much Manisha for helping us with our partnership residence visa application. We really appreciate the effort and guidance you provided. You are very trustworthy & honest with us throughout the whole visa process. Highly recommended to everyone & we will continue to take Credo Services in future too.",
  },
  {
    id: "sahil-kashyap",
    name: "Sahil Kashyap",
    location: "New Zealand",
    rating: 5,
    isFeatured: false,
    text: "A big thank you to Credo Migration Services in helping me attain my Essential Skills for 3 years! Thank you so much Manisha Ma'am for your dedicated relentless efforts, your guidance and skills that helped me in attaining my visa smoothly. Highly recommended. Thank you and Good luck for your future endeavours!",
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.isFeatured);