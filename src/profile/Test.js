//(1) gets data (fullName, bio, profession) as props, and gets image as children props,

//(2)  handleName functions as a prop that sends 
// an alert message with the name of the profile user.
import React from 'react'
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap';
import { Card,CardGroup } from 'react-bootstrap';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit';
import f  from "./img/First.jpg";
import s  from "./img/Second.jfif";
import t  from "./img/tt.jpg";


const Test = props =>{
    return (
        <div>
      
       <header >
      <MDBNavbar expand='lg' light bgColor='white' sticky  >
        <MDBContainer fluid >
          <MDBNavbarToggler 
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01' >
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem >
                <MDBNavbarLink aria-current='page' href='#'>أشهر اعمالها </MDBNavbarLink> 
              </MDBNavbarItem>

              <MDBNavbarItem >
              <MDBNavbarLink aria-current='page' href='#'>مهرجانات</MDBNavbarLink>  
              </MDBNavbarItem>
             
              <MDBNavbarItem >
              <MDBNavbarLink aria-current='page' href='#'>مسلسلات</MDBNavbarLink>  
              </MDBNavbarItem>

              <MDBNavbarItem >
              <MDBNavbarLink aria-current='page' href='#'>افلام</MDBNavbarLink>  
              </MDBNavbarItem>
              
              <MDBNavbarItem >
              <MDBNavbarLink aria-current='page' href='#'>جوائز </MDBNavbarLink>  
              </MDBNavbarItem>
              <MDBNavbarItem >
              <MDBNavbarLink aria-current='page' href='#'> من هي ؟ </MDBNavbarLink>  
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div > 
      {props.children}
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className='d-flex justify-content-end align-items-center h-100'>
          <div className='text-white'>

            <h1 className='mb-3'>{props.name}</h1>

    <h4 className='mb-3' style={{ width: '830px' , textAlign:'right', padding:'10px'}}
   > {props.bio}
    وهما موسم الرجال 
              وصمت القصور للمخرجة مفيدة التلاتلي. 
              ولفتت نظر المخرجة إيناس الدغيدي
               فدعتها إلى القاهرة وأسندت إليها 
              دور البطولة في فيلم مذكرات مراهقة 2001،  وهذا
               الدور هو الذي أعطاها شهرة واسعة في العالم العربي،
               ومن ثم لمع إسمها بتعدد مشاركاتها 
              حتى أصبحت واحدة من أهم النجمات في السينما المصرية.
<hr></hr>
{props.profession}
<hr></hr>
الممثلة «هند صبري» حاصلة على درجة ماجستير في حقوق الملكية الفكرية،
 وهي مرسمة منذ فيفري/شباط 2007 في جدول المحاماة بتونس. 
ولقد تزوجت من رجل الأعمال المصري أحمد الشريف. وفي عام 2019 اختيرت عضوة للجنة تحكيم 
مهرجان البندقية السينمائي العالمي في دورته الـ 76، 
وهي أول سيدة عربية تنضم للجنة.
   </h4>
  
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
{/* CARD */}
<CardGroup>          
  <Card>
  
     <Card.Img variant="top" src={f} height={520}
     style={{ borderWidth: 3 ,justifyContent: 'center',borderRadius: 50 ,margin: 10, alignItems: 'center',width: 450}} />

    <Card.Body>
      <Card.Title>الفيل الازرق 2</Card.Title>
      <Card.Text>
      فيلم دراما وغموض مصري من إنتاج سنة 2019. 
      الفيلم من إخراج مروان حامد، وتأليف أحمد مراد، وإنتاج سينرجي للإنتاج الفني،
       ومن بطولة كريم عبد العزيز، وإياد نصار، وهند صبري، ونيللي كريم، وتارا عماد،
       وأحمد خالد صالح. حقق الفيلم أعلى الإيرادات في موسم عرضه عيد الأضحى 2019،
       وأعلى الإيرادات في تاريخ السينما المصرية بمبلغ 103 مليون جنيه مصري.
      </Card.Text>
    </Card.Body>
    
  </Card>
  {/* --------------------------------- */}
  <Card>
  <Card.Img variant="top" src={s} height={520}
     style={{ borderWidth: 3 ,justifyContent: 'center',borderRadius: 50,margin: 10 , alignItems: 'center',width: 450}}/>
   
    <Card.Body>
      <Card.Title>البحث عن عٌلا</Card.Title>
      <Card.Text>
      رحلة الدكتورة الصيدلانية عٌلا عبدالصبور بعد 
      إنفصالها عن زوجها هشام، في محاولة منها لمواكبة تطورات الحياة، واكتشاف نفسها
       ومحاولتها البحث عن الحب، بجانب مراعاة المسئوليات الموضوعة على عاتقها.
ﺇﺧﺮاﺝ: هادي الباجوري (مخرج)
ﺗﺄﻟﻴﻒ: مها الوزير (مؤلف)  غادة عبدالعال (مؤلف)
طاقم العمل: هند صبري  سوسن بدر  
هاني عادل  ندى موسى  محمود الليثي  داليا شوقي مسلسل مصري, تصنيف العمل: ﻛﻮﻣﻴﺪﻱ
      </Card.Text>
    </Card.Body>
   
  </Card>
  {/* --------------------------------- */}
  <Card>
  <Card.Img variant="top" src={t} height={520} 
    style={{ borderWidth: 3 ,justifyContent: 'center',borderRadius: 50,margin: 10, alignItems: 'center',width: 450}} />
  
    <Card.Body>
      <Card.Title>هجـمة مرتدة</Card.Title>
      <Card.Text>
      تدور أحداث المسلسل المأخوذة من الملفات الحديثة للمخابرات
       المصرية، حول شاب مصري يعمل في الخارج ويحاول التواصل مع جهاز المخابرات
       بعد محاولة تجنيده من قبل استخبارات دولة أجنبية، ويبدأ بعد ذلك التدريب
       على يد مسؤولين من المخابرات المصرية ليتمكن من خداع الجهات المعادية.
      هو مسلسل تلفزيوني مصري عٌرض في شهر رمضان لعام 2021، 
       المسلسل مأخوذ عن أحد ملفات المخابرات العامة المصرية، بطولة أحمد عز 
      وهند صبري وهشام سليم ومن تأليف باهر دويدار ومن إخراج أحمد علاء الديب.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
    </header>
       
     


</div>
    );
}
export default Test 
