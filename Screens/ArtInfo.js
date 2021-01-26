import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const ArtInfoScreen = (props) => {  
    var name = props.route.params.name;    
    if (name == 'yıldız'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:300,width: 350}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/300px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Yıldızlı Gece - Vincent Van Gogh (1889) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Yıldızlı Gece (Felemenkçe: De sterrennacht), Hollandalı art izlenimci ressam Vincent van Gogh tarafından yapılan yağlı boya tablo. Haziran 1889'da yaptığı tabloda ressam, sanatoryumdaki odasının doğuya bakan pencereden görünen Saint-Rémy-de-Provence köyünün gün doğuşundan hemen önceki görünüşünü resmetmiştir.

Tablo, 1941 yılından beri New York'taki Museum of Modern Art müzesinin kalıcı koleksiyonunda bulunmaktadır. Van Gogh'un en ünlü eserleriden biri olan Yıldızlı Gece, aynı zamanda Batı kültürünün en ünlü tablolarından biridir.
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
    else if (name == 'david'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/%27David%27_by_Michelangelo_JBU0001.JPG/375px-%27David%27_by_Michelangelo_JBU0001.JPG'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Davut (David) - Michelangelo (1504) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Michelangelo’nun Davut Heykeli, Michelangelo Buonarroti tarafından 1501 yılında yapımına başlanmış ve 1504 tarihinde tamamlanmıştır. Geniş çevrelerce, Michelangelo’nun (Pietà ile birlikte) en iyi iki heykelinden biri ve Rönesans heykel sanatının bir başyapıtı kabul edilmektedir. Eser, Davut’un Golyat’a saldırmaya karar verdiği anı simgelemektedir. 5,17 metre yüksekliğindeki mermer heykel Floransa’nın bir sembolü niteliğindedir. Heykelin tamamı 8 Eylül 1504 tarihinde ortaya çıkarılmıştır.

Figürün omzunun üzerinde dikkat çeken sapanın yanı sıra figürde neredeyse mükemmel ‘insan oranı’ betimlenmiştir. Heykel, erkek form bilgisi esas alınarak disegno sanatsal disiplini ile temellendirilmiştir. Bu disipline göre heykel en iyi sanat şekli olarak ortaya konmuştur; çünkü ilahi yaratılışı taklit etmektedir. Michelangelo bu disipline olan bağlılığını şu davranış şekliyle ortaya koymuştur: Sanki Davut onun çalıştığı mermer bloğun zaten içindedir ve onu dışarıya çıkarmak ister. Aynen insan ruhunun bedenin derinliklerinde bulunduğuna olan genel inanç gibi. Bu ayrıca contrapposto stilinin de bir örneğidir.
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
    else if (name == 'afgan'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://i.pinimg.com/originals/89/9c/53/899c537338ea7bf2254eea0bbe44f17d.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Afgan Kızı (Şarbat Gula) - Steve McCurry (1985) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Şarbat Gula (d. 20 Mart 1972), fotoğrafı National Geographic dergisine 1985 yılında kapak olduktan sonra geniş kitlelerce tanınan Peştun kökenli Afgan.

Şarbat Gula, Sovyetler Birliği ve Afganistan arasındaki savaş sırasında öksüz kaldı. 1984 yılında Pakistan'da bulunduğu mülteci kampında Steve McCurry tarafından fotoğrafı çekildi. Gula, kamptaki okulda öğrenciydi. Afgan kadınların fotoğraflarını çekmek konusunda zorluklar yaşayan Steve McCurry, eline geçen fırsatı iyi değerlendirdi. Gula fotoğrafı çekildiğinde yaklaşık on üç yaşındaydı.

Bu fotoğraf, National Geographic 1985 haziran sayısında "Afghan Girl" (Afgan Kızı) başlığıyla yayımlandı. Şarbat Gula keskin bakışları ve yeşil gözleriyle, seksenli yıllardaki Afgan savaşının ve mültecilerin tüm dünyaya yayılan simgesi oldu. Fotoğraf ayrıca yayın dünyasında en fazla bilinen fotoğraf unvanına sahiptir.
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
    else if (name == 'guernica'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:300, width:600}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/tr/thumb/7/7f/Picasso_Guernica.jpg/375px-Picasso_Guernica.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Guernica - Pablo Picasso (1937) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Guernica, Pablo Picasso tarafından 1937'de yapılan, İspanya İç Savaşı sırasında Nazi Almanyası'na ait 28 bombardıman uçağının 26 Nisan 1937'de İspanya'daki Guernica şehrini bombalamasını anlatan, 7,76 m eninde ve 3,49 m yüksekliğinde anıtsal tablodur. Saldırı sırasında 250 ila 1.600 kişi hayatını kaybetmiş, çok daha fazla sayıda kişi de yaralanmıştı.

İspanyol hükümeti, Paris'teki 1937 Dünya Fuarı kapsamındaki Modern Hayatta Sanat ve Teknik sergisinin İspanya'ya ayrılan bölümünde sergilenmek üzere, Pablo Picasso'ya büyük bir duvar resmi sipariş etti. O sırada gerçekleşen hava saldırısından etkilenen Picasso, saldırıdan sonraki 15 gün içinde bu duvar resmini tamamladı. Tablo ufak bir dünya turu kapsamında çeşitli ülkelerde sergilendi ve beğeni topladı. Böylece İspanya'daki iç savaşa diğer ülkelerin ilgisi de çekilmiş oldu. Guernica, savaş trajedilerinin ve savaşın bireyler üzerindeki acı verici etkilerinin bir özetidir. Tablo zaman içinde, savaşın yarattığı trajedilerin anımsatıcısı, savaş karşıtı ve barış yanlısı düşüncelerin sembolü haline gelmiştir.
                    
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
    else if (name == 'exp'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/300px-The_Scream.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Dışavurumculuk (Ekspresyonizm) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Dışa vurumculuk (ekspresyonizm), doğanın olduğu gibi temsili yerine duyguların ve iç dünyanın ön plana çıkarıldığı 20. yüzyıl sanat akımı. Politik istikrarsızlık ve ekonomik çöküntü ortamında Almanya'da pozitivizm ve naturalizm ve empresyonizm akımlarına karşı olarak ortaya çıkmıştır. 19. yüzyıl gerçekçilik ve idealizmine karşıt anti-natüralist öznelliğe sahip bir bakış açısı içerir. Ayrıca kuzeyli, Cermen halk sanatı biçimleri ve kabile sanatları da etkilendiği diğer kaynaklardır. Dışa vurumcu sanatın amacı, sanatçının duyguları ve iç dünyasını renk, çizgi, düzlem ve kütle aracılığıyla dışa vurmasıdır. Bu duyguları daha iyi yansıtabilmek için sanatçı geleneksel kuralların dışına çıkarak gerçeğin biçimini bozma yöntemini kullanır ve sanatçının öznel duygularına dayanmaktadır.

Dışa vurumculuk bu terim kullanılmadan da sanatta ifade edilmekteydi. Örneğin; İspanya'da ressam El Greco (d. 1541 – o. 1614) ve Alman rönesans ressamı Matthias Grünewald (d. 1470 – o. 1528) içerikleri dışa vurumculuk ögelerinden oluşmuş sanat eserleri vermekle beraber dışa vurumculuk sıfatı sadece XX. yüzyıl sanat eserlerine verilmektedir. Dışa vurumculuk birçok sanat formlarını kapsamaktadır: edebiyat, film, heykeltıraşlık, mimarî, müzik, resim, tiyatro.
                    
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
    else if (name == 'kübizm'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg/375px-Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Kübizm </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Kübizm, 20. yüzyıl başındaki temsile dayalı sanat anlayışından saparak devrim yapan Fransız sanat akımıdır. Pablo Picasso ve Georges Braque, nesne yüzeylerinin ardına bakarak konuyu aynı anda değişik açılardan sunabilecek geometrik şekilleri vurgulamışlardır.
                    20. yüzyıl başlarında ortaya çıkmıştır. Kübizm terimi I. Dünya Savaşı'ndan önceki yıllarda Paris'te gelişen bir resim akımını belirtir. O dönemde Avrupa'da biçimlenmekte olan modern sanatın ışığın geçici etkilerini resmetmek olan izlenimcilerden hoşnut olmayan bir genç ressamlar kuşağı yetişiyordu; bunlar, Matisse'in çevresinde toplanmış olan fovların çok renkli resim sanatından da hoşlanmıyorlardı. Kübist sanatçılara göre dış dünyanın nesneleri sadece göründükleri yanıyla değil görünmeyen tüm yanları ile ele alınmalıydı. Empresyonizm'e egemen olan görme duygusu yerine, Kübistler aklın başatlığına dayanan aklın gücünü ortaya koymak istiyorlardı.Tablolarını sağlam temellere oturtmak istiyor ve bu konuda ressam Paul Cezanne'ın izinden gidiyorlardı. Nitekim bu ressamlar, Cezanne'dan, onun son Provence manzaralarından ve natürmortlarından esinlenecekler, bundan da kübizm doğacaktı. Manifestosu yazan Apollinaire, bir taklit sanat değil tasarım sanatı olduğunu söyler.
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
    else if (name == 'kaplumbağa'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:600, width: 300}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kaplumba%C4%9Fa_Terbiyecisi_vers2.jpg/375px-Kaplumba%C4%9Fa_Terbiyecisi_vers2.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Kaplumbağa Terbiyecisi - Osman Hamdi Bey (1906-1907) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Kaplumbağa Terbiyecisi, Osman Hamdi Bey'in 1906 ve 1907 yıllarında iki farklı versiyonunu çizdiği tablosudur. Osmanlı Ressamlar Cemiyeti tarafından çıkartılan gazetenin on yedinci sayısında tablonun adı Kaplumbağalar ve Adam olarak geçer, ancak tabloya daha sonra yaygın olarak bilinen Kaplumbağa Terbiyecisi adı verilmiştir.
                    Osman Hamdi Bey'in bu tablosu, özellikle ilham kaynağına dair net bilgilerin olmadığı dönemde, geri kalmış bir toplumu çağdaşlaştırmaya çalışan bir aydının yorgun hâlini anlattığı şeklinde yorumlanmıştır. Kaplumbağaların esin kaynağının, Lâle Devri'ndeki Sadabad eğlenceleri sırasında, hava karardıktan sonra sırtlarına mum dikilerek serbest bırakılan kaplumbağalar olduğu öne sürülmüştür.
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
    else if (name == 'penseur'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:500, width: 350}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Classic_view_of_The_Thinker_%288437831806%29.jpg/375px-Classic_view_of_The_Thinker_%288437831806%29.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Düşünen Adam - Auguste Rodin (1882, 1904) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Düşünen Adam (Fransızca: Le Penseur), Fransız heykeltıraş Auguste Rodin tarafından üretilmiş sanat eseri.

Dünyanın en ünlü heykellerinden birisi olan eser, genellikle felsefi düşünceyi anlatan bir simge olarak kullanılmaktadır.

Rodin'in Cehennem Kapısı adlı eserinin üstüne yerleştirmek üzere alçıdan yaptığı küçük figürün, büyük boyutlu halidir. Rodin, pek çok versiyonunu ürettiği heykelin ilk bronz dökümünü 1904 yılında tamamlamıştır. Bu ilk versiyon, günümüzde Paris'teki Rodin Müzesi'ndedir.

Dünyanın çeşitli yerlerindeki birçok önemli yapıda kopyaları bulunur. Türkiye'de 1951 yılında Bakırköy Ruh ve Sinir Hastalıkları Hastanesi'nin bahçesine hastalar tarafından bir kopyası yapılmış ve akıl hastalıklarının sembolü haline gelmiştir.
                    
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
    else if (name == 'gerçek'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:350, width: 500}} source = {{uri: 'https://img-s2.onedio.com/id-53b3d93cd99598025e2d06ed/rev-0/w-635/listing/f-jpg-webp/s-9bfb9c07a8e48f4e962e0e94d7bfb645067ad315.webp'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Gerçeküstücülük (Sürrealizm) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Gerçeküstücülük ya da sürrealizm, Avrupa'da birinci ve ikinci dünya savaşları arasında gelişmiştir. Temelini, akılcılığı yadsıyan ve karşı-sanat için çalışan ilk dadaistlerin eserlerinden alır. 1924'te "Manifeste du Surrealisme"i (Sürrealizm Manifestosu) hazırlayan şair Andre Breton'a göre gerçeküstücülük, bilinç ile bilinç dışını birleştiren bir yoldur. Gerçeküstücülük akımı, gerçek dışı anlamında değil aksine gerçeğin insandaki iz düşümü şeklinde bir yaklaşımdır.
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
    else if (name == 'emp'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:350, width: 500}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Claude_Monet%2C_Impression%2C_soleil_levant%2C_1872.jpg/330px-Claude_Monet%2C_Impression%2C_soleil_levant%2C_1872.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> İzlenimcilik (Empresyonizm) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    İzlenimcilik veya empresyonizm, 19. yüzyılda Fransa'da ortaya çıkan ve bütün sanat dallarını, özellikle resmi etkileyen akım. Doğadaki unsurların kişinin içinde oluşturduğu izlenimleri, duygusal izleri yansıtmayı hedefler. Bu akım içerisinde yer alan sanatçılar, doğayı objektif bir gerçek olarak değil, kendilerinde yarattığı izlenimi resme (veya edebi esere) aktarırlar.

Resimde izlenimcilik, özellikle ışık ve renkten kaynaklanan görsel izlenimleri yansıtmayı hedefler. Resmedilen nesnelere veya olaydan çok günün belirli bir zamanına özgü ışığın sanatçı üzerinde yarattığı izlenimlere önem verilir. Akımın öncüleri Claude Monet ve Camille Pissarro'dur.

İzlenimcilere göre sanatçı doğrudan doğruya gerçeği değil, gördüklerinin kendisinde uyandırdığı duygu ve düşünceleri esas almalı, gerçekçiliği ve nesnelliği ikinci plana atarak, kişisel yorumu ön plana çıkarmalıdır.
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

export default ArtInfoScreen;