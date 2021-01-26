import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const MusicInfoScreen = (props) => {  
    var name = props.route.params.name;    
    if (name == 'wall'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://www.thestudentplaylist.com/wp-content/uploads/2019/11/pink_floyd_the_wall.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> The Wall - Pink Floyd (1979) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Pink Floyd'un, 1979 yılının son aylarında çıkmış, 23 defa platin plak ödülü almış konsept rock albümü. Pink adında, sanal bir karakter üzerinden, giderek yalnızlaşan, yabancılaşan insanın korkuları ile kendi çevresine ördüğü soyut duvarı anlatır. Albümün sözel ve müzikal kurgusu, aynı adı taşıyan karmaşık sahne gösterisi temel alınarak tasarlanmıştır. 1982 yılında Alan Parker yönetmenliğinde sinemaya aktarılmıştır.
                    Albümde Pink isimli sanal bir karakterin yaşadıklarının ve çevresinin etkisiyle kendini toplumdan soyutlaması işlenir. Büyük ölçüde konseptin yaratıcısı ve şarkı sözlerinin yazarı Roger Waters'ın kişisel deneyimlerine ve Pink Floyd'un kurucusu olan Syd Barrett'in yaşamı üzerindeki izlere dayanmaktadır. Albüme adını veren "The Wall" yani duvar, kişinin kendini soyutlamasını anlatan bir metafor olarak kullanılmıştır.
                    
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
    else if (name == 'saray'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Die_Entf%C3%BChrung_aus_dem_Serail_livret.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Die Entführung aus dem Serail - Mozart (1782) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Saraydan Kız Kaçırma (asıl Almanca adı "Die Entführung aus dem Serail" veya İtalyanca adı "Il Seraglio", Köchel dizini numarası: K. 384"), Wolfgang Amadeus Mozart'ın bir operasıdır. Bu opera özel olarak Alman stili Singspiel şeklinde hazırlanmıştır. Bu stildeki opera eserinde konuşma diliyle müzik dramı karışıktır; eserdeki olaylar konuşma ile geliştirilir; resitatif müzik bulunmamaktadır ve müzik, gösteri şeklinde parçalardan oluşmaktadır. Eserin Almanca librettosu önce "Christoph Friedrich Bretzner" tarafından yazılmış ve sonradan Mozart'in istek ve katkılarıyla "Gottlieb Stephanie" tarafından adaptasyonlar yapılmıştır. Eserin konusu Belmonte adlı bir İspanyol soylusunun, uşağı Pedrillo ile birlikte, sevgilisi olan Konstanze'yi ve onun İngiliz hizmetkarı Blonde'yi tutsak olarak bulundukları Selim Paşanın Akdeniz kıyılarındaki sarayından veya yazlık köşkünden ve Paşa'nın harem bekçisi olan Osminin elinden kurtarmak için yaptığı girişimlerdir. 1782 yılında Mozart'ın kariyerinin doruk noktalarından birini yaşayıp "Die Entführung aus dem Serail" (Saraydan Kız Kaçırma) ile müthiş bir başarıya ulaşmıştır.
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
    else if (name == 'caz'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/375px-Louis_Armstrong_restored.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Caz </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Caz, ilk kez ABD'nin güney eyaletlerinde, 1900'lerin başında gelişmeye başlamış bir müzik türüdür. Caz müziği, mavi notalar, senkop, swing, çoklu ritim, atışma, ve doğaçlama tekniklerini kullanır; Afrikalı-Amerikalı ve Batı müziği tekniklerinin harmanlanmasıdır. Bu müziğin dünya ile tanışması ise 1917 yılında Dixieland Jazz Band'in ilk plaklarının piyasaya çıkmasıyla olmuştur. 1920 ile 1930'larda popülerliğinin artmasıyla başta ABD olmak üzere tüm dünya genelinde Caz Çağı yaşanmıştır. Caz yalnızca geçmişte değil, bugün dahi çok sevilen ve ünü gün geçtikçe artan müzik türlerinden biridir.

Caz müziği yirminci yüzyıl başlarında keşfedildiği topraklar olan ABD'den çıkıp dünyaya yayılma sürecinde ve günümüze gelene kadar birçok alt türe (New Orleans, Swing, Kansas, Çingene cazı, bebop, cool, avangart, serbest caz, Latin caz, soul, füzyon, caz rock, smooth, caz funk, etno caz, asit caz) ayrılmış ve sayısız müzik türü ve geleneğiyle etkileşime girmiştir.
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
    else if (name == 'beatles'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Fabs.JPG/330px-The_Fabs.JPG'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> The Beatles (1960 - 1970) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    The Beatles, 1960 yılında Birleşik Krallık'ın Liverpool kentinde kurulmuş bir rock grubudur. Ağustos 1962'den dağılışına kadar John Lennon, Paul McCartney, George Harrison ve Ringo Starr dörtlüsünden oluşan The Beatles, kültürel ve ekonomik açıdan müzik tarihinin en etkili gruplarından biri olarak kabul edilmektedir. Bir çok satış rekoru kırmış ve elliden fazla şarkısıyla Billboard listelerinde yer almıştır. 1964 yılında ABD'ye gelerek Britanya Müziği'nin Amerika'da popülerleşmesine neden olmuştur. Grup ayrıca 2004'te Rolling Stone dergisi tarafından son elli yılın en önemli ve etkili rock müzik sanatçıları arasında birinci sırada gösterilmiştir.
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
    else if (name == 'blues'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://www.anadoluturkhaber.com/uploadedfiles/Blues-Muzigin-Krali-BB-King-Hayatini-Kaybetti-90573.bbking_02092010_7670.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Blues </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Blues terimi Batı Afrika kültüründe cenaze ve yas törenlerinde ''acının ifadesi'' olarak kullanılan "çivit rengi" üzerinden mistisizme dayanır. Blues, 400 yıllık geçmişi olan ve temeli Afrika'ya dayanan, bir müzik türüdür. Kökleri Afrika'da bulunan blues, 17. yüzyıldan itibaren Afrika'dan getirilen kölelerin tarlalarda çalışırken söyledikleri hüznü, umudu, özgürlüğü ve derin acıyı anlatan şarkılardan doğmuştur. İlk yayınlanan Blues notası Hart Wand'ın 1912 tarihli "Dallas Blues"udur.

Blues, 1865 yılından itibaren köleliğin kaldırılmasıyla birlikte Amerikan toplumu içinde yayılmaya başlar ve buradan da zaman içerisinde tüm dünyaya yayılır. 1910'lu yıllardan itibaren ise blues, Amerika'da birçok şehre yayılır. Bu şehirlerdeki kültürle ve müzikle harmanlanır ve yeni Blues türleri ortaya çıkar, bunlardan bazıları Delta Blues, Memphis Blues, Texas Blues'dur. 1930'lu yıllara gelindiğinde Blues, Caz müzik ile harmanlanarak Robert Johnson, Big Bill Broonzy, Sonny Boy Williamson, Lonnie Johnson ve Tampa Red idi.

Blues'un formu, genellikle Afrika ve Afro-Amerikan müziğinde bulunan "çağrı ve cevap" düzeniyle akor dizilerinin tekrarlayan döngüsüdür.12 ölçülük Blues, popüler müzikte en çok kullanılan akor yürüyüşüdür.Blues notaları, genellikle bemolleştirilmiş üçlü, bemolleştirilmiş beşli ya da bemolleştirilmiş yedili olarak isimlendirilirler. Blues, özünde en çok ritim özellikleriyle dikkat çekmektedir. Ancak günümüzde icra edilmekte olan Electric Blues yüksek enstrüman hakimiyeti ve güçlü ritim kabiliyetiyle birlikte iyi bir armoni bilgisini de gerektirmektedir. Zira Modern Blues, Afrika kökenlerinin yanında çok yüklü bir etkileşime uğramış ve pek çok müzikten kalıntılar barındırır hale gelmiştir.
                    
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
    else if (name == 'carmen'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:400, width :300}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Prudent-Louis_Leray_-_Poster_for_the_premi%C3%A8re_of_Georges_Bizet%27s_Carmen.jpg/338px-Prudent-Louis_Leray_-_Poster_for_the_premi%C3%A8re_of_Georges_Bizet%27s_Carmen.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Carmen - Georges Bizet (1875) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Carmen, Fransız besteci Georges Bizet'nin 4 perdelik opera eseri. Ana konusu Mérimée'in Carmen adlı kısa romanından alınmıştır. Librettosu ise Meilhac ve Halévy tarafından yazılmıştır. Prömiyeri Paris'te, Opera Komik'te, 1875'te sahnelenmiştir.

Fransa'da 3 Mart 1875'te ilk sahnelendiğinde yerleşik opera ve ahlâk anlayışının ihlali gibi algılandığından olumsuz tepkilerle karşılanan eser, eleştirmenler tarafından yüzeysel, üstünkörü bulunmuş ve afişten kaldırılmıştır. Bizet bu üzücü olaydan üç ay sonra henüz 37 yaşındayken ölmüştür. Bu durum kimilerinin garip tahminlerine yol açmış, onun bu başarısızlık üzerine üzüntüden öldüğü söylentileri çıkmıştır. Hâlbuki Bizet eserin kaderini önceden sezmiş, o çağın ahlak kurallarına uygun olmayacağını anlamıştı. Metin yazarlarından Meilhac'a bu inancını belirtmiş, ilk geceden sonra suçun kendisinde olduğunu söyleyerek, özür dilemiştir.

Bizet birkaç yıl daha yaşasaydı operanın kısa bir zaman sonra tekrarlanışını, kazandığı muhteşem zaferi, dünya sahnelerine fırtına gibi yayılışını görecek başka eser yazmasa da mutlu bir hayat geçirecekti. Carmen, çevresindeki tartışmalar, çatışmalar, tereddüt ve ön yargılar ne olursa olsun günümüzde bildiğimiz tek şey bu eserin opera repertuvarında çok az görülen bir ilgi toplamış olmasıdır.

Operanın hikâyesi 1830 civarlarında İspanyanın Sevil şehrinde geçer. Eserin baş kadını çok güzel ve ateşli bir tabiatı olan ve bir tütün fabrikasında işçi olarak çalışan bir çingene genç kız olan Carmen'dir. Aşkını kullanmada çok serbest olan Carmen, aşk alanında hiç tecrübesiz bir asker olan onbaşı Don José'yi kandırır. Bu ilişki yüzünden Don José eski nişanlısını bırakır. Birliğindeki üst rütbedeki subayların emirlerine karşı gelip askerlikten kaçar. Bir kaçakçı ekibinin üyesi olur. Carmen kendinden bıkıp boğa güreşçisi Escamillo ile aşk hayatına başlayınca kıskançlığından Carmen'i öldürür.
                    
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
    else if (name == 'freddie'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:400, width :300}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/330px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Freddie Mercury (1946 - 1991) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Freddie Mercury (5 Eylül 1946, Zanzibar – 24 Kasım 1991, Londra), Britanyalı şarkıcı, şarkı yazarı ve müzik grubu Queen'in solisti.

Gerçek adı, Farrokh Bulsara'dır. Sahnedeki duruşu, şovu, pek çok kişi tarafından hâlâ dünyanın en güçlü vokali olarak anılan sesi, Queen'i insanlık tarihinin en çok tanınan müzik gruplarından biri haline getirmesi ile tanınan, Queen grubunun kurucusu ve vokalisti. Rock müzik ve operanın bir arada kullanımı başta olmak üzere, değişik müzik türlerini bir arada harmanlayan bir müzik anlayışına sahiptir. "Bohemian Rhapsody", "Somebody to Love", "We Are the Champions", "Don't Stop Me Now", "Killer Queen" ve "Crazy Little Thing Called Love" gibi pek çok uluslararası hit parçanın yazarıdır. Komplike bir özgüvene ve cesarete sahip olduğunu o yıllarda sahip olduğu dış görünüşü, müziği ve Queen ile tüm dünyaya hissettirmiştir. Yıllarca Queen grubundaki çalışmaları ile birlikte solo olarak da çalışmıştır. Mercury, ayrıca İlk Asyalı Rock Star olarak adlandırılır. 1991 senesinde AIDS'in getirdiği komplikasyonlar sonucu yaşamını yitirmiştir. Ölümünden sonra geriye kalan grup üyeleri, toplumun AIDS farkındalığının artması amacıyla The Freddie Mercury Tribute Concert adında bir konser düzenlemişlerdir.
                    
                    
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
    else if (name == 'mozart'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:400, width :300}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/330px-Wolfgang-amadeus-mozart_1.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Wolfgang Amadeus Mozart (1756 - 1791) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Wolfgang Amadeus Mozart (27 Ocak 1756, Salzburg - 5 Aralık 1791, Viyana) veya vaftiz adıyla Johannes Chrysostomus Wolfgangus Theophilus Mozart, Klasik Batı Müziği'nde Klasik dönemin etkili ve üretken bestekârlarından biridir.

Kutsal Roma İmparatorluğu'na bağlı Salzburg'da doğan Mozart, olağanüstü yeteneklerini erken yaşta göstermeye başladı. Beş yaşında piyano ve keman konusunda yetkin hale gelmiş, beste yapmaya başlamıştı ve Avrupalı kraliyet ailelerine konserler veriyordu. 17 yaşında Mozart, Salzburg sarayında müzisyen olarak görev yapmaya başladı ama orada tatmin olmayınca daha iyi bir pozisyon aramak üzere seyahatlere çıkmaya başladı. 1781'de Viyana seyahati sırasında Salzburg'daki görevinden ihraç edildi. Bunun üzerine Viyana'da kalmaya karar verdi. Viyana'da daha meşhurdu ama maddi güvencesi daha azdı. En ünlü senfonilerinin, konçertolarının ve operalarının birçoğunu ve Requiem'in bazı kısımlarını Viyana'daki son yıllarında besteledi. 35 yaşında öldüğünde Requiem henüz tamamlanmamıştı. Ölümüyle ilgili ayrıntılar hâlâ tartışma konusudur.

Bestelediği 600'den fazla eserin birçoğu senfoni, konçerto, oda, opera ve koro müziğinin zirve noktaları olarak kabul edilir.
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
    else if (name == 'messiah'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:400, width :300}} source = {{uri: 'https://s3.us-east-2.amazonaws.com/umb-media-library/media/360572/handel_300w.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Messiah (1742) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Messiah (HWV 56) George Frideric Handel tarafından bestelenen İngilizce bir oratoryo, Batı koro müziğinin en popüler eserlerinden biridir.

Eser, Londra'da 1741 yazı süresince bestelendi ve 13 Nisan 1742 tarihinde Dublin, İrlanda'da ilk kez sahnelendi. Messiah, Handel tarafından tekrar tekrar revize edildi. En tanıdık versiyonuna 1754'te Foundling Hospital'a yardım toplamak amacıyla yapılan performansıyla ulaştı. 1789'da Mozart, eserin bir Alman versiyonunu yaptı; nefesli çalgılar ekledi.
                    
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
    else if (name == 'mj'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:500, width :300}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Michael Jackson (1958 - 2009) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Michael Joseph Jackson (29 Ağustos 1958, Gary, Indiana - 25 Haziran 2009, Los Angeles, Kaliforniya), "Pop'un Kralı" olarak tanınan Afro-Amerikalı şarkıcı, müzisyen, besteci, söz yazarı ve dansçı.

Jackson ailesinin dokuz çocuğunun yedincisi olarak dünyaya gelen Michael Jackson, babasının kurduğu Jackson 5 grubunda 1964 yılında henüz 6 yaşındayken müzik yaşamına atılmıştır. Daha sonra Off the Wall (1979), Thriller (1982), Bad (1987), Dangerous (1991), HIStory (1995) gibi milyonlarca satan solo albümlere imza atan Jackson, büyük bir şöhret kazanmış ve “Popun Kralı” (İngilizce: King of Pop) olarak anılmaya başlanmıştır. Albümleri tüm dünyada 140 milyon üzerinde satmıştır. Michael Jackson sadece stüdyo albümleri olarak 125 milyon albüm satışı ile stüdyo albümleri dünyada tüm zamanların en çok satmış müzisyenidir. Thriller albümü 55 milyon üzeri ile dünyada en çok satan 1. albümdür, ayrıca ABD'de en çok satan 1. albümdür. Dünyanın en çok satan albümleri listesinde beş albümü ile listeye en çok girmiş 1. kişidir ve Thriller ile 1 numaradadır.
Michael Jackson, özellikle ölümünden önceki son yıllarda bazı sağlık sorunları ve skandallarla gündeme gelmiştir. Üç çocuk babası olan Michael Jackson, 25 Haziran 2009 günü Los Angeles'taki evinde geçirdiği rahatsızlık sonucu koma hâlinde hastaneye kaldırılmış fakat kurtarılamamıştır. Ölüm nedeni kalp durması sanılsa da, Los Angeles Adli Tıp Kurumu'nun yaptığı otopsi ile ölüm nedeninin uykusuzluk tedavisinde kullandığı çok güçlü anestezi ilacı propofol olduğu açıklanmıştır. Propofol ve sakinleştirici lorazepam ilaçlarının Jackson'ın ölümünün en önemli nedenleri olduğu kaydedilen açıklamada, Jackson'ın kanında midazolam, diazepam, lidocaine ve ephedrine ilaçlarının da bulunduğu söylenmiştir. Olayın cinayet olmasından şüphenilmekle birlikte Jackson'ın şahsi doktoruna Şubat 2010'da "kazara ölüme sebebiyet verme" suçundan dava açılmıştır. Bu dava doktorun mahkeme kararıyla hapis cezasına çarptırılmasıyla sonuçlandı.
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
        width: 400,
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

export default MusicInfoScreen;