import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const SciInfoScreen = (props) => {  
    var name = props.route.params.name;    
    if (name == 'www'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://www.researchgate.net/profile/James_Geller2/publication/228987214/figure/fig1/AS:341383421415434@1458403558449/The-schema-of-the-World-Wide-Web-It-is-based-on-an-ERD-Entity-Relationship-Diagram.png'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> World Wide Web </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    World Wide Web, Dünya Çapında Ağ (kısaca WWW veya Web), İnternet üzerinde yayınlanan birbirleriyle bağlantılı hiper-metin dokümanlarından oluşan bir bilgi sistemidir. Bu dokümanların her birine Web sayfası adı verilir ve Web sayfalarına İnternet kullanıcısının bilgisayarında çalışan Web tarayıcısı adı verilen bilgisayar programları aracılığıyla erişilir. Web sayfalarında metin, imaj, video ve diğer multimedya ögeleri bulunabilir ve diğer bağlantı ya da link adı verilen hiper-bağlantılar ile başka Web sayfalarına geçiş yapılabilir.

İnternet ve Web terimleri aynı olguyu tanımlamaz. Zira Web sadece İnternet üzerinde çalışan bir servistir. Web kavramı, CERN'de bir bilgisayar programcısı olan Tim Berners-Lee'nin HTML adlı metin işaretleme dilini geliştirmesiyle oluşmuştur. Bugün de kendisinin başkanı olduğu W3C (World Wide Web Consortium) tarafından standartları belirlenmektedir.
                    </Text>
                    <Text></Text>
                    </View>
                    <Text></Text>
                    <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress = {() => alert("Share on Facebook")}><Ionicons name={"logo-facebook"} size = {30} color = {'#4267B2'}/></TouchableOpacity>                    
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Twitter")}><Ionicons name={"logo-twitter"} size = {30} color = {'#1DA1F2'}/></TouchableOpacity>
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Whatsapp")}><Ionicons name={"logo-whatsapp"} size = {30} color = {'#25D366'}/></TouchableOpacity> 
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Instagram")}><Ionicons name={"logo-instagram"} size = {30} color = {'#8a3ab9'}/></TouchableOpacity> 
                    </View>
                    <Text></Text>
                </View>  
            </ScrollView>
          );
    }
    else if (name == 'covid'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://www.3m.com.tr/wps/wcm/connect/b28c921f-451e-4c5d-9173-b1393a1b801f/Coronavirus_410x270px.jpg?MOD=AJPERES'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> COVID-19 </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Korona virüs hastalığı 2019 (COVID-19) şiddetli akut solunum sendromu koronavirüsü 2 (SARS-CoV-2)'nin neden olduğu bulaşıcı bir hastalıktır. İlk vaka ile Çin'in Hubei eyaletinin Vuhan şehrinde Aralık 2019 tarihinde karşılaşılmıştır. O zamandan bu yana yayılmaya devam etmiş ve hala daha devam eden bir pandemiye neden olmuştur. 
                    Covid-19 semptomları genellikle değişkendir fakat ateş, öksürük, yorgunluk, nefes almakta zorluk, anozmi (koku alma duyusunda kayıp) ve tat alma duyusunda kayıp gibi semptomlar sıkça görülen semptomları arasındadır. Semptomlar virüsle temastan bir ile on dört gün içerisinde görülmektedir. Enfekte olan kişilerden yaklaşık olarak beş kişiden birinde herhangi bir belirti görülmemektedir.[3] Çoğu insanda hafif semptomlar görülmesine karşın bazı insanlarda akut solunum sıkıntısı sendromu (ARDS)'nin görülmesine neden olabilmektedir. ARDS sıtokin fırtınalarına,[4] çoklu organ yetmezliğine, sepsise ve tromboza neden olabilmektedir. (Özellikle akciğerler ve kalpte olmak üzere) Organlarda uzun vadeli hasarlar gözlemlenmiştir. Hastalığın akut evresini geçirmiş olmalarına rağmen çeşitli etkileri aylarca yaşamaya devam eden kayda değer sayıda hastanın bulunması endişelere neden olmaktadır. Bu durum ayrıca uzun Covid olarak da bilinmektedir. Bu etkiler arasında şiddetli yorgunluk, hafıza kaybı da dahil olmak üzere bilişsel problemler, düşük derecelerde ateş, kaslarda güçsüzlük ve nefes darlığı bulunmaktadır.
                    </Text>
                    <Text></Text>
                    </View>
                    <Text></Text>
                    <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress = {() => alert("Share on Facebook")}><Ionicons name={"logo-facebook"} size = {30} color = {'#4267B2'}/></TouchableOpacity>                    
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Twitter")}><Ionicons name={"logo-twitter"} size = {30} color = {'#1DA1F2'}/></TouchableOpacity>
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Whatsapp")}><Ionicons name={"logo-whatsapp"} size = {30} color = {'#25D366'}/></TouchableOpacity> 
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Instagram")}><Ionicons name={"logo-instagram"} size = {30} color = {'#8a3ab9'}/></TouchableOpacity> 
                    </View>
                    <Text></Text>
                </View>  
            </ScrollView>
          );
    }
    else if (name == 'görelilik'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Spacetime_curvature.png/480px-Spacetime_curvature.png'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Görelilik Teorisi </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Görelilik teorisi, Albert Einstein'ın çalışmaları sonucu ortaya atılmış iki teoriyi kapsar: özel görelilik (madde & enerji ilişkisi) ve genel görelilik (uzay & zaman ilişkisi). Özel görelilik, yerçekiminin yokluğunda tüm fiziksel fenomenler için geçerlidir. Genel görelilik, yerçekimi yasasını ve bu yasanın diğer doğa kuvvetleri ile ilişkisini açıklar. Astronomi de dahil olmak üzere kozmolojik ve astrofiziksel alem için geçerlidir.
                    </Text>
                    <Text></Text>
                    </View>
                    <Text></Text>
                    <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress = {() => alert("Share on Facebook")}><Ionicons name={"logo-facebook"} size = {30} color = {'#4267B2'}/></TouchableOpacity>                    
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Twitter")}><Ionicons name={"logo-twitter"} size = {30} color = {'#1DA1F2'}/></TouchableOpacity>
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Whatsapp")}><Ionicons name={"logo-whatsapp"} size = {30} color = {'#25D366'}/></TouchableOpacity> 
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Instagram")}><Ionicons name={"logo-instagram"} size = {30} color = {'#8a3ab9'}/></TouchableOpacity> 
                    </View>
                    <Text></Text>
                </View>  
            </ScrollView>
          );
    }
    else if (name == 'penisilin'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Penicillin-core.png/480px-Penicillin-core.png'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Penisilin </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Penisilin, 1928 yılında Londra'da Alexander Fleming tarafından Penicillium notatum adlı küfte keşfedilen antibiyotik. Bu madde, ilk olarak 1911 yılında bir İskandinavyalı tarafından tanımlanmış olmakla beraber o yıllarda iyileştirici gücü bilinmemekteydi. 1945 yılında Fleming'le birlikte Nobel Ödülünü kazanan Oxfordlu Florey ve Chain, penisilinin kitle halinde elde edilebilmesini temin etmişlerdir.
                    </Text>
                    <Text></Text>
                    </View>
                    <Text></Text>
                    <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress = {() => alert("Share on Facebook")}><Ionicons name={"logo-facebook"} size = {30} color = {'#4267B2'}/></TouchableOpacity>                    
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Twitter")}><Ionicons name={"logo-twitter"} size = {30} color = {'#1DA1F2'}/></TouchableOpacity>
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Whatsapp")}><Ionicons name={"logo-whatsapp"} size = {30} color = {'#25D366'}/></TouchableOpacity> 
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Instagram")}><Ionicons name={"logo-instagram"} size = {30} color = {'#8a3ab9'}/></TouchableOpacity> 
                    </View>
                    <Text></Text>
                </View>  
            </ScrollView>
          );
    }
    else if (name == 'evren'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/NASA-HS201427a-HubbleUltraDeepField2014-20140603.jpg/450px-NASA-HS201427a-HubbleUltraDeepField2014-20140603.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Evren </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Evren veya kâinat, uzay ve uzayda bulunan tüm madde ve enerji biçimlerini içeren bütünün adıdır. Pozitif bilimler açısından evren, gök cisimlerini barındıran uzay ve uzayda yer alan her şeyin toplamıdır.

Enerji dalga veya partikülleri homojen ve dengeli olarak çözüldüğünde 'var oluş' ile 'anti-varoluş' olamayacağı ya da toplam karşıtları 'yok oluşta' ise bir patlama olamayacağından, evren soğuyor mu, ısınıyor mu, evrenin durması sonu mudur, Büyük patlama evrenin merkezi mi, başlangıcı mıdır, güneş evrenin merkezinde midir gibi problemler hareket veya başka deyişle zamanın popüler sorularını teşkil etmiştir.

Evrenin oluşumuna dair günümüzde en çok benimsenen teori, Büyük Patlama teorisidir. Bu teoriye göre evren, sıfır hacimli ve çok yüksek bir enerji potansiyeline sahip, sıkışmış bir noktanın patlamasıyla oluştu. İlk patlamanın nasıl oluştuğu, evren meydana gelmeden önce evrenin yerinde ne olduğu ya da evrenin neyin içinde genişlediği sorularına günümüzde bile tam olarak bilimsel bir cevap bulunamamıştır, bununla birlikte evren öncesi durum, evren dışı varoluş hakkında hipotezler öne sürülmüştür. Büyük Patlama sonucunda uzun bir dönem boyunca birbirlerinden bağımsız hareket ettiler. Sürekli genişleyen evrenin her yerinde geçerli olan fizik kanunlarından kütleçekimi kanunu vasıtasıyla bağımsız gazlar birleşerek galaksileri (gök adaları) oluşturdular.

Aynı evrensel fizik kanunu neticesinde gökadalar da birbirlerine yaklaşarak devasa gruplar oluşturdu. Galaksiler içinde yıldızlar ve bazı yıldızların çevresinde sistemler oluştu. İçinde yaşadığımız Güneş Sistemi bunlardan birisidir. Keşfedebildiğimiz evrende 400 milyardan fazla galaksi ve 300 sextillion (3 × 1023) yıldız olduğu tahmin edilmektedir.
                    </Text>
                    <Text></Text>
                    </View>
                    <Text></Text>
                    <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress = {() => alert("Share on Facebook")}><Ionicons name={"logo-facebook"} size = {30} color = {'#4267B2'}/></TouchableOpacity>                    
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Twitter")}><Ionicons name={"logo-twitter"} size = {30} color = {'#1DA1F2'}/></TouchableOpacity>
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Whatsapp")}><Ionicons name={"logo-whatsapp"} size = {30} color = {'#25D366'}/></TouchableOpacity> 
                    <Text>      </Text>
                    <TouchableOpacity onPress = {() => alert("Share on Instagram")}><Ionicons name={"logo-instagram"} size = {30} color = {'#8a3ab9'}/></TouchableOpacity> 
                    </View>
                    <Text></Text>
                </View>  
            </ScrollView>
          );
    }       
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: '#0F0F0F',        
    },

    thumb: {
        height: 250,
        width: 350,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },

    card: {
       marginVertical: 8,
       marginHorizontal: 8,
       backgroundColor: 'gray',
       borderRadius: 16,
       shadowOpacity: 0.2,
       shadowRadius: 4,
       shadowColor: 'black',
       shadowOffset: {
       height: 5,
       width: 5,
      },
  },
    
    TitleText: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'gray'
    },

    InfoText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'justify',
        color: 'black',
        marginHorizontal:4,
      },

  });

export default SciInfoScreen;