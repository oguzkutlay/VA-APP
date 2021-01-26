import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const LitInfoScreen = (props) => {  
    var name = props.route.params.name;    
    if (name == 'kafka'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Kafka.jpg/330px-Kafka.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Franz Kafka (1883 - 1924) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Franz Kafka (3 Temmuz 1883 - 3 Haziran 1924), Almanca konuşan Bohemyalı roman ve hikâye yazarı. 20. yüzyıl edebiyatının en önemli figürlerinden biri olarak kabul edilmektedir. Gerçekçilik unsurlarını ve fantastik unsurları birleştiren[3] eserleri tipik olarak tuhaf veya sürrealist ön yargılarla ve anlaşılmaz sosyal-bürokratik güçlerle karşı karşıya kalan izole kahramanlara sahiptir ve yabancılaşma, varoluşsal kaygı, suçluluk ve saçmalık temalarını keşfetme olarak yorumlanmıştır. "Dönüşüm" ("Die Verwandlung"), Dava (Der Process) ve Şato (Der Schloss) en bilinen eserleridir. "Kafkaesk" terimi, Kafka'nın yazdıklarındaki gibi durumları tanımlamak için üretilmiştir.

Kafka, Bohemya Krallığı'nın başkenti ve daha sonra Avusturya-Macaristan İmparatorluğu'nun parçası olmuş, günümüzde Çek Cumhuriyeti'nin başkenti olan Prag'da, Almanca konuşan Yahudi orta sınıf bir ailede dünyaya geldi. Avukat olmak amacıyla hukuk eğitimini tamamladıktan sonra bir sigorta şirketinde çalışmaya başladı. İşinden dolayı bulduğu boş zamanlar onu yazı yazmaya sevk etti. Yaşamı boyunca, gergin ve mesafeli bir ilişki yaşadığı babası dahil olmak üzere, ailesine ve yakın arkadaşlarına yüzlerce mektup yazdı. Birçok kez nişanlanmasına rağmen hiç evlenmedi ve 1924'te 40 yaşındayken veremden öldü.

Kafka'nın eserlerinden çok azı yazar hayattayken yayımlandı: hikâye kitapları Gözlem (Betrachtung) ve Bir Köy Hekimi (Ein Landarzt) ile "Dönüşüm" gibi tekil hikâyeleri edebî dergilerde yer aldı fakat pek ilgi görmedi. Kafka; Dava, Şato ve Amerika (Der Verschollene) gibi tamamlanmamış eserlerini yok etmesi için arkadaşı Max Brod'a verdi, fakat Brod arkadaşının talimatını görmezden gelerek yazarın ölümünden sonra bunları yayımladı. Eserleri, 20. yüzyıl boyunca birçok yazarı, eleştirmeni, sanatçıyı ve filozofu etkilemeye devam etti.
                    
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
    else if (name == 'dönüşüm'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:300, width:500}} source = {{uri: 'https://i.pinimg.com/originals/15/9d/2e/159d2e3ee3187ddcaf74a776e61f03e2.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Dönüşüm - Franz Kafka (1915) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Dönüşüm, Değişim veya Metamorfoz (Almanca özgün adı: Die Verwandlung), Franz Kafka'nın uzun öyküsü.

İlk olarak 1915 yılında yayımlanmıştır. Kafka'nın en popüler eseri sayılabilir. Öykü, Gregor Samsa'nın bir sabah kendini dev bir böceğe dönüşmüş bulmasıyla başlar ve hayatındaki değişiklikleri anlatarak devam eder.
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
    else if (name == 'dava'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kafka_Der_Prozess_1925.jpg/330px-Kafka_Der_Prozess_1925.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Dava - Franz Kafka (1925) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Dava, (Der Prozeß), bir sabah uyandığında kendisini sebebini anlamadığı bir suç nedeniyle dava edilmiş bulan Josef K. adlı kahramanın absürt durumunun anlatıldığı bir Franz Kafka romanıdır.

Gerçekdışı niteliğiyle Kafka'nın şaşırtıcı yapıtları arasında çok önemli bir yeri olan Dava; tamamlanmamış bölümleriyle birlikte yazarın ölümünden iki yıl sonra, yakın arkadaşı Max Brod'un katkılarıyla, 1925'te yayımlanmıştır.

Roman 1962'de Orson Welles tarafından filme uyarlanmıştır.

Bir sabah ansızın tutuklandığını; ama normal yaşamına devam edebileceğini öğrenen Josef K., neyle suçlandığı bildirilmediği için önce bunu bir şaka sansa da, kısa sürede durumun ciddiyetini kavrar. Ancak ne mahkemeye çıkarılır ne de savcılarla görüşebilir. Çalıştığı bankada, kaldığı pansiyonda, gittiği yerlerde herkes, anlaşılmaz bir biçimde bu davadan haberdardır. Kaderin bir tür oyunuyla sürüklenir durur, savunma gücü yoktur, bir hiçtir o.

Yavaş yavaş bir saplantı haline getirdiği davasıyla arasında hiçbir aracı bulunmadığını, kaçınılmaz bir biçimde bu davanın tam merkezinde kendisinin yer aldığını anladığında ise, cezasını beklemeye başlar.

Aslında ortada gerçek bir dava da yoktur. Kafka'nın burada anlatmak istediği Bay K. zaten yaşam ya da dünya tarafından tutuklanmış; fakat bunun bilincine hiçbir zaman varamamış olmasıdır.
                    
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
    else if (name == 'shakespeare'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/375px-Shakespeare.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> William Shakespeare (1564 - 1616) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    William Shakespeare (26 Nisan 1564 (vaftiz) – 23 Nisan 1616), İngiliz şair, oyun yazarı ve oyuncu. Çoklukla İngilizce dilinin en büyük yazarı ve dünyanın en iyi oyun yazarı olarak anılır. İngiltere'nin ulusal şairi ve "Avon'un Ozanı" olarak da bilinir. Günümüze ulaşan eserleri, bazı ortaklaşa yazılanlarla birlikte 38 oyun, 154 sone, iki uzun öykü şiir ve birkaç diğer kaynağı belirsiz şiirlerden oluşur. Oyunları bütün büyük dillere çevrildi ve diğer bütün oyun yazarlarından daha çok sergilendi.

Shakespeare Stratford-upon-Avon'da doğdu ve büyüdü. 18 yaşında, Anne Hathaway ile evlendi ve üç çocuğu oldu: Susanna, ve ikizler Hamnet ile Judith. 1585 ile 1592 arası, Londra'da bir aktör, yazar ve Lord Chamberlain's Men (sonraki adı King's Men) adında bir tiyatro şirketinin sahibi olarak başarılı bir kariyere başladı. Ölmeden 3 yıl önce 1613'te, 49 yaşındayken Stratford'da emekli olarak görüldü. Shakespeare'in kişisel yaşamına dair bazı kayıtlar günümüze ulaşmıştır. Fiziksel görünüşü, cinsel yönelimi, dini inançları, ve başkaları tarafından yazılıp ona atfedilen eserler olup olmadığı hakkında önemli tahminler yürütülmüştür.

Shakespeare, bilinen eserlerinin çoğunu 1589 ile 1613 yıllarında üretti. İlk oyunları çoğunlukla komedi ve tarihîydi, bu türlerle 16. yüzyıl sonunda kültür ve sanatın zirvesine yükseldi. Daha sonra 1608'e kadar trajedilere yöneldi, İngilizce'nin en iyi ürünlerinden bazıları kabul edilen Hamlet, Kral Lear, Othello, ve Macbeth'i bu dönemde yazdı. Son aşamasında, dram olarak da bilinen trajikomedilerini yazdı, ve diğer oyun yazarlarıyla iş birliği yaptı.

Oyunlarının birçoğu hayatı boyunca değişik kalitede ve doğrulukta basında yayımlandı. 1623'te, Shakespeare'in iki arkadaşı ve aktör dostu John Heminges ve Henry Condell, şimdi Shakespeare'in olduğu bilinen iki eser dışındaki tüm dramatik eserlerini içeren bir derleme baskıyı, Birinci Folyo'yu yayımladı. Önsözü Ben Jonson'ın bir şiiriydi, şiirde ileri görüşle Shakespeare için "bir döneme değil, tüm zamanlara ait" şeklinde bahsedilmiştir.
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
    else if (name == 'macbeth'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Thomas_Keene_in_Macbeth_1884_Wikipedia_crop.png/330px-Thomas_Keene_in_Macbeth_1884_Wikipedia_crop.png'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Macbeth - Shakespeare (1606) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Macbeth (İngilizce telaffuz: [məkˈbɛθ]; tam adıyla The Tragedy of Macbeth), William Shakespeare'in en kısası olmasının yanında en önemli trajedilerinden biridir. Tüm dünyadaki hem profesyonel hem de amatör tiyatrolar tarafından sıkça sahneye konulur.

Oyunun, bir kısmı Raphael Holinshed'in ve İskoç filozof Hector Boece'nin İskoç Kralı Mac Bethad (Macbeth) hakkında yazdıklarına dayanır. Macbeth'in hikâyesi, genellikle güç düşkünlüğü ve arkadaşlara ihanet konularında örnek bir hikâye olarak gösterilir.
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
    else if (name == 'komedya'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Alighieri_-_Divina_Commedia%2C_Nel_mille_quatro_cento_septe_et_due_nel_quarto_mese_adi_cinque_et_sei_-_2384293_id00022000_Scan00006.jpg/330px-Alighieri_-_Divina_Commedia%2C_Nel_mille_quatro_cento_septe_et_due_nel_quarto_mese_adi_cinque_et_sei_-_2384293_id00022000_Scan00006.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> İlahi Komedya - Dante (1472) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    İlahi Komedya (İtalyanca: Commedia, Divina Commedia), Dante tarafından 14. yüzyılın ilk yarısında yazılmış, İtalyan edebiyatının en meşhur epik şiiri ve dünya edebiyatının önemli bir başyapıtı.

Komedya'da Dante, ölüm sonrası sırasıyla Cehennem, Araf ve Cennette geçen seyahati, hikâyenin kahramanı da olan kendisinin ağzından anlatır. Orta Çağda "Komedya", "tragedya'nın" aksine sonu iyi biten hikâye anlamına gelirdi. Burada eserin adındaki "komedya" kelimesi, öyküsünün güldürü unsurları taşıdığı anlamına gelmez.

Orta Çağ ile Rönesans arasındaki geçiş döneminde yazılmış bu şiir, hayalgücü ve alegorik tasavvuru, ölüm sonrası hayatı anlattığı öyküsü ile Hristiyan batı kiliseleri tarafından benimsendi. Eserin orijinal adı "Komedya" olmakla birlikte daha sonra, 1360 yılında Giovanni Boccaccio tarafından başına "İlahi" kelimesi eklenerek Hristiyanlaştırılmıştır.

Toskana lehçesi ile yazılan eser, bu lehçenin modern İtalyan dili olarak gelişmesine yardım etmiştir.
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
    else if (name == 'tolkien'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/J._R._R._Tolkien%2C_1940s.jpg/330px-J._R._R._Tolkien%2C_1940s.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> J.R.R Tolkien (1892 - 1973) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    John Ronald Reuel Tolkien (d. 3 Ocak 1892 - ö. 2 Eylül 1973), İngiliz yazar, şair, filolog ve akademisyen. Hobbit, Yüzüklerin Efendisi ve Silmarillion gibi fantastik kurgu eserleriyle tanınır. Oxford Üniversitesi'ne bağlı kolejlerde Anglosakson dili profesörü ve İngiliz dili ve edebiyatı profesörü olarak görev yaptı.
                    Entelektüel bir topluluk olan "Inklings"i yakın dostu C.S. Lewis ile kurdu ve 1937 yılında Hobbit'i yayımladı. Roman hem olumlu hem de olumsuz tepkiler aldı. Bazıları, Oxford'da profesör olan Tolkien'den nasıl olup da bir masal kitabı çıktığını soruyordu. Ama olumsuz eleştiriler bir işe yaramadı ve Hobbit kısa zamanda popüler oldu.

Hobbit, aslında, Yüzüklerin Efendisi serisinin başlangıcıdır. Orta Dünya ilk kez bu kitapta okuyucuların karşısına çıkar. Bundan sonra Tolkien Yüzüklerin Efendisi üzerinde çalışmaya başlar.
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
    else if (name == 'asimov'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Isaac.Asimov01.jpg/375px-Isaac.Asimov01.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Isaac Asimov (1920 - 1992) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Isaac Asimov (2 Ocak 1920 – 6 Nisan 1992), Boston Üniversitesi'nde biyokimya profesörlüğü yapmış Amerikalı yazar ve biyokimyager.

Daha çok bilimkurgu ve popüler bilim yazarlığı yapması ile tanındı. Hayatı boyunca 500'den fazla kitap 90,000 kartpostal yazacak kadar üretken bir insandı.

Pek çok konuda yapıtları olmasına karşın, bilimkurgu eserleri ve popüler bilim kitapları ile tanınmıştır. Kurgu olmayan çok sayıda eserinin yanı sıra fantezi dalında da yazmıştır. Dewey Onlu Sınıflama Sistemi'ndeki felsefe hariç tüm ana dallarda eserleri vardır. Asimov ortak görüşle bilimkurgu dalının ustasıdır. Robert A. Heinlein ve Arthur C. Clarke ile birlikte yaşadığı dönemde "üç büyük" bilimkurgu yazarından biri olarak kabul edilmiştir.
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
    else if (name == 'camus'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/330px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Albert Camus (1913 - 1960) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Albert Camus (Fransızca telaffuz: [albɛʁ kamy]; (7 Kasım 1913 – 4 Ocak 1960), Fransız yazar ve filozof.

Varoluşçuluk ile ilgilenmiştir ve absürdizm akımının öncülerinden biri olarak tanınır; fakat Camus kendini herhangi bir akımın filozofu olarak görmediğinden, kendini bir "varoluşçu" ya da "absürdist" olarak tanımlamaz. 1957'de Nobel Edebiyat Ödülü'nü kazanarak, Rudyard Kipling'den sonra bu ödülü kazanan en genç yazar olmuştur. Ödülü aldıktan 3 yıl sonra bir trafik kazasında ölmüştür.
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
    else if (name == 'yeraltı'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:500, width: 300}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%BA%D0%B8_%D0%B8%D0%B7_%D0%BF%D0%BE%D0%B4%D0%BF%D0%BE%D0%BB%D1%8C%D1%8F._%D0%9F%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C_%D0%A4.%D0%9C._%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%281866%29_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg/330px-%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%BA%D0%B8_%D0%B8%D0%B7_%D0%BF%D0%BE%D0%B4%D0%BF%D0%BE%D0%BB%D1%8C%D1%8F._%D0%9F%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C_%D0%A4.%D0%9C._%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%281866%29_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Yeraltından Notlar (1864) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Yeraltından Notlar (Rusça: Записки из подполья, Zapiski iz podpolya), Dostoyevski'nin, Camus dahil olmak üzere birçok Batılı düşünürü varoluşçu anlamda etkilemiş bir klasik olarak kabul edilen kısa romanıdır. 1864 yılında Petersburg'da basılmıştır.

Yeraltından Notlar, gerçek dünyadan kendini soyutlamış veya buna zorunlu kalmış bir kişinin iç çatışmalarını ve hezeyanlarını ana eksen olarak belirler. Yeraltı Adamı'nın monoloğu ve ünlü "Ben hasta bir adamım." ifadesi ile romana giren Dostoyevski bu romanıyla sonraki döneminin büyük eserlerine bir giriş yapar.

Yeraltından Notlar, modernite eleştirileri için erken sayılabilecek bir yılda, 1864'te, Rusya'da köleliğin feshedildiği 1861'den üç yıl sonra basılır. Köleliğin kaldırılması ile Rusya'da yeni bir havanın estiği bilinmektedir. Ancak Dostoyevski'nin karakteri ayrı bir alemdedir. İçerdiği temalar Rus edebiyatına dışsal olarak görülse de Rus düşünsel yaşamına dışsal değildir, ancak çoğuna ters bir yanıttır. Dostoyevski'nin bu eserini Çernişevski'nin "Nasıl Yapmalı" adlı ütopik sosyalist eserine bir nevi cevap olarak yazdığı kabul edilir. Çernişevski'nin yine Petersburg'da geçen romanındaki iyimserliğin karşısında Yeraltı'nın karanlık gurultusunu seslendirir Dostoyevski.

Dostoyevski'nin Rus aydınına karşı seslendirdiği haklı sitem, ve bunun getirisi olarak romana sinen kötümserce eleştirisi aslen yine Dostoyevski'nin "Rusluk" olarak tanımladığı Batı Hayranlığına karşıdır. Batılılaşma, modernizasyonun Rusya'da şehir olarak temsili olan Petersburg'un seçilmesi batılılaşma sorununu bir şekilde ele alan veya ona dokunan tüm romanların, hikâyelerin zorunluluğudur. Çernişevski'nin "Nasıl Yapmalı"sı gibi Gogol'ün ünlü "Palto"'su da St. Petersburg'u mekan olarak alır, keza Dostoyevski'nin bir sonraki romanı olan ve belki de en ünlü romanı olan "Suç ve Ceza"nın da mekanı St. Petersburg'dur.

Romanın ilk bölümü bu romanın ardından zamanla "Yeraltı Adamı" olarak tanınan karakterin itirafları, serzenişleri, hakaretleri, hayıflanmaları kısaca iç dünyası üzerine bir monologdur. Çevresindeki insanlardan tiksinen, nefretle insanları anan, insanları belki de hiç sevmemiş gibi görünen kapalı bir karakterin fazlasıyla açık ifadeleridir. İkinci bölümde ise Yeraltı Adamı'nın yeraltından bir anlık çıkışı ve daha önceden arkadaşı olduğu anaşılan kişilerle bir hesap görmeye çabalamasını izleriz.

Dostoyevski Yeraltından Notlar ile yeni çağına girer. Bu romanını takip eden "Suç ve Ceza" ile büyük ün kazanır. Suç ve Ceza ile Yeraltından Notlar arasında sürekli bir bağlantı kurma çabası vardır, ancak Suç ve Ceza büyük bir ahlak öğretisidir aynı zamanda, Yeraltı ise bu minvalde sert bir eleştiri olabilir ancak. Yazarın tarihi kendisini bu ahlâk kavgasında bularak başlamıştır.
                    
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
        height: 400,
        width: 300,
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

export default LitInfoScreen;