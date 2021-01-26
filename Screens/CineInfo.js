import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const CineInfoScreen = (props) => {  
    var name = props.route.params.name;
    if (name == 'bladerunner'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/tr/5/53/Blade_Runner_poster.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}>Blade Runner (Bıçak Sırtı) - 1982</Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Bıçak Sırtı (İngilizce: Blade Runner), Ridley Scott tarafından yönetilen 1982 tarihli ABD yapımı bilimkurgu filmidir. Başrollerde Harrison Ford, Rutger Hauer, ve Sean Young yer almıştır. Philip K. Dick'in Android'ler Elektrikli Koyun Düşler mi? adlı romanını temel alan senaryoyu Hampton Fancher ve David Peoples yazmıştır.

                    Filmin hikâyesi 2019 yılının Los Angeles'ında geçer. Sorun çıkaran replicantları öldürmek ile görevli "Bıçak Koşucuları" adlı polis birimine üye olan Rick Deckard (Harrison Ford), köle gibi çalıştırılmaktan bıkıp dünyanın dışındaki bir yerde Nexus 6 isyanını düzenleyen replicantları öldürmek ile görevlendirilir. Replicantlardan biri olan Roy Batty'nin (Rutger Hauer) amacı yaratıcısı Dr. Eldon Tyrell'i (Joe Turkel) öldürmektir.
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
    else if (name == 'yedi'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/tr/thumb/a/af/386px-Seven_movie_poster.jpg/330px-386px-Seven_movie_poster.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}>Se7en (Yedi) - 1995</Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Yedi (orijinal adı: Se7en), senaryosu Andrew Kevin Walker tarafından yazılmış, yönetmenliği ise David Fincher tarafından yapılan 1995 yapımı filmdir.Filmde Hristiyanlık'ın 7 ölümcül günahını işleyenleri kendi vahşi yöntemleriyle öldüren bir seri katili ve onun peşindeki iki polis dedektifinin çabalarını konu alan, Hollywood yapımı bir gerilim filmidir. Sürekli yağmur yağan bir şehir, küf rengi tonlar, karanlık mekanlarda çekilen sahneleri ile sinema klasikleri arasında gösterilmektedir.

                    1995 yapımı olan film, David Fincher tarafından yönetilmiştir ve başrollerde Brad Pitt, Morgan Freeman ve Gwyneth Paltrow rol almıştır.
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
    else if (name == 'baba'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://i.pinimg.com/originals/a0/c0/50/a0c050d68a619f501fb3f3a44e4aeba8.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> The Godfather (Baba) - 1972 </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Baba (İngilizce: The Godfather), Mario Puzo'nun yazdığı aynı adlı romandan uyarlanan, Francis Ford Coppola'nın yönettiği, Marlon Brando ve Al Pacino'nun başrollerini paylaştığı filmdir. Filmde ayrıca yardımcı rollerde James Caan, Robert Duvall, Diane Keaton, John Cazale vardır. Filmin hikâyesi, II. Dünya Savaşı'nın bittiği yıl olan 1945'te başlar ve 10 yıllık bir dönemi kapsar.

                    Film, New York'ta yaşayan güçlü bir İtalyan mafya ailesinin hikâyesini anlatır. Film gösterime girdiği andan itibaren çok ilgi görmüş, birçok kurum, enstitü ve derginin gelmiş geçmiş en iyi filmleri sıralamasında en üst sıralara yerleşmiştir. Kullanıcı oylarının baz alındığı IMDB.com27 Kasım 2016 tarihinde Wayback Machine sitesinde arşivlendi.'un en iyi 250 film listesinde 2. sıradadır. (Çok uzun bir süre 1. sırada kalan film Temmuz 2008'de Shawshank Redemption'a birinciliği kaptırmıştır) Amerikan Film Enstitüsü'nün hazırladığı ve en iyi 100 amerikan filminin yer aldığı AFI's 100 Years... 100 Movies listesinde 1998 listesinde 3. 2007 listesinde ise 2. sıradadır. Film ayrıca En İyi Film, En İyi Erkek Oyuncu (Marlon Brando) ve En İyi Uyarlama Senaryo (Francis Ford Coppola, Mario Puzo) dallarında Oscar kazanmıştır.

                    "Baba", 1990 yılında Kongre Kütüphanesi tarafından "kültürel, tarihi ve estetik olarak önemli" filmler arasına seçilerek ABD Ulusal Film Arşivi'nde muhafaza edilmesine karar verilmiştir.
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
    else if (name == 'iyikotu'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/tr/6/6c/%C4%B0yik%C3%B6t%C3%BCve%C3%A7irkin.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> The Good, The Bad and The Ugly (İyi, Kötü ve Çirkin) - 1966 </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    İyi, Kötü ve Çirkin (İtalyanca: Il buono, il brutto, il cattivo), 1966 yapımı Sergio Leone'nin yönettiği Italyan Spagetti Western filmidir. Başrollerini Clint Eastwood, Lee Van Cleef ve Eli Wallach paylaşmaktadır. Filmin hikâyesi Luciano Vincenzoni ve Sergio Leone tarafından, senaryosu ise Agenore Incrocci ve Furio Scarpelli tarafından yazılmıştır. Filmin müzikleri Ennio Morricone tarafından bestelenmiştir. Film Türkiye'de 13 Ocak 1969'da gösterime girmiştir.

                    Bir Avuç Dolar (1964) ve Birkaç Dolar İçin (1965) filmleriyle başlayan üçlemenin sonuncusudur. Üçlemeler arasında konu bağlantısı yoktur.

                    Clint Eastwood bu filmde 1968 yılındaki Golden Laurel ödüllerinde en iyi aksiyon performansı dalında ikinciliğe layık görülmüştür ve dünya çapında tanınan bir aktör haline gelmiştir.

                    Film IMDb'de dünyanın gelmiş geçmiş en iyi 250 filmi arasında 9. sırada yer almaktadır.
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
    else if (name == 'koh'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/tr/6/65/KingdomOfHeaven.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Kingdom of Heaven (Cennetin Krallığı) - 2005 </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Cennetin Krallığı (orijinal adı: Kingdom of Heaven), Ridley Scott'ın çektiği 2005 tarihli, Haçlı Seferleri üzerine bir filmdir. Filmin başrollerini Orlando Bloom, Liam Neeson, Jeremy Irons, Edward Norton, Eva Green ve Selahaddin Eyyubi rolünde Gassan Mesud oynamaktadır.

                    Film Selahaddin Eyyubi'nin Kudüs şehrini haçlıların kurduğu Kudüs Krallığı'ndan geri alması olayı etrafında haçlı seferlerini ve iki tarafın bu savaşlara bakışını anlatmaktadır.

                    Film temel olarak 12. yüzyıldaki haçlı seferleri sonrası Kudüs'ün durumunu ele almaktadır.
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
    else if (name == 'lalaland'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/tr/thumb/2/20/La_La_Land_%28film%29.jpg/330px-La_La_Land_%28film%29.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> La La Land (Aşıklar Şehri) - 2016 </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Aşıklar Şehri (özgün adıyla La La Land), Damien Chazelle tarafından yazılan ve yönetilen Amerikan romantik müzikal komedi-drama filmi. Filmin başrollerinde Ryan Gosling ve Emma Stone yer almaktadır. Film oyunculuğa hevesli Mia ile caz piyanisti Sebastian'ın ilişkisini konu edinmektedir. Los Angeles'ta çekilen filmin özgün ismi aynı zamanda şehri ifade etmektedir.

                    Chazelle filmin senaryosunu 2010'da yazdı fakat yapımcı bulamadı. Whiplash'ın başarısından sonra film Summit Entertainment tarafından yapılandırıldı. Film galasını 31 Ağustos 2016'da 73. Venedik Uluslararası Film Festivali'nde yaptı ve 9 Aralık 2016 tarihinde ABD'de gösterime girdi.

                    Aşıklar Şehri oldukça iyi bir eleştirel beğeni sağladı ve 2016'nın en iyi filmlerinden biri olarak kabul edildi. Film Amerikan Film Enstitüsü tarafından 2016'nın en iyi 10 filminden biri seçildi ve 89. Akademi Ödülleri'nde 14 adaylık elde ederek Akademi Ödülleri tarihinde en fazla adaylık elde eden üç filmden biri oldu ve 6 dalda ödül kazandı. Ayrıca 74. Altın Küre Ödülleri'nde en fazla adaylık elde eden film olarak elde ettiği 7 adaylıktan hepsini kazanarak Altın Küre tarihininde rekorunu kırmış oldu. Ayrıca 70. BAFTA Ödülleri'nde elde ettiği 11 adaylık ile yine en fazla adaylık elde eden film oldu.
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
    else if (name == 'shaw'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/tr/thumb/e/e6/Esaretin-bedeli.jpg/330px-Esaretin-bedeli.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> The Shawshank Redemption (Esaretin Bedeli) - 1994 </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Esaretin Bedeli (İngilizce: The Shawshank Redemption), Frank Darabont'un senaryosunu yazdığı ve yönettiği, başrollerinde Tim Robbins ve Morgan Freeman'ın yer aldığı 1994 yapımı Amerikan dram filmidir.

                    Stephen King'in Rita Hayworth ve Shawshank'in Kefareti adlı novellasından uyarlanan film, masumiyetini iddia etmesine rağmen karısını ve sevgilisini öldürdüğü gerekçesiyle Shawshank Devlet Cezaevi'nde yaklaşık 20 yılını geçiren bankacı Andy Dufresne'in hikâyesini anlatır. Cezaevinde kaldığı süre boyunca diğer mahkûmlardan Ellis Boyd "Red" Redding ile arkadaşlık kuran Dufresne, cezaevi müdürünün para aklama faaliyetlerine yardım etmeye başladıktan sonra gardiyanlar tarafından korunmaya başlanır.

                    Film, gişe hasılatının bütçesini zor karşılamasına rağmen eleştirmenlerden olumlu eleştiriler aldı ve birçok ödüle aday gösterildi. Sonrasında kablo televizyon, VHS, DVD ve Blu-ray üzerinde büyük bir ilgi gördü. Amerikan Film Enstitüsü'nün hazırladığı AFI'nın 100 Yılı... 100 Film listesinin 10. yıldönüm sayısına dahil edildi. IMDb'de 2.245.319 kişinin oylamasıyla 10 üzerinden 9.2 puan ortalamasını yakalayarak tüm zamanların en beğenilen sinema filmi olarak listenin başındaki yerini halihazırda korumaktadır.

                    Frank Darabont Stephan King'in hikâyesinin yayın haklarını 1987 yılında satın aldı fakat 5 yıl boyunca bir gelişme yaşanmadı. Ardından senaryoyu sekiz haftalık bir süreçte yazdı. Castle Rock Entertainment şirketine sunduktan iki hafta sonra yapım için 25 milyon dolarlık bir bütçe elde etti. Yapım öncesi çalışmalar Ocak 1993'te başladı. Film Maine'de çekilirken, temel çekim neredeyse tamamen Haziran 1993'ten Ağustos 1993'e kadar hapishane olarak hizmet veren Ohio Devlet Islahevi'nin de bulunduğu Ohio'nun Mensfield şehrinde yapıldı.
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
    else if (name == 'shining'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/tr/thumb/7/72/Shining.jpg/330px-Shining.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> The Shining (Cinnet) - 1980 </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    The Shining, Stanley Kubrick'in Stephen King'in aynı adlı romanından beyaz perdeye uyarladığı 1980 yapımı filmdir.

                    Filmin başrolünde yazar Jack Torrance'ı canlandıran Jack Nicholson vardır. Torrance'ın karısı rolünü ise Shelley Duvall canlandırmıştır. Uzun ve detaylı takip sahnelerinin çekimi için steadicam'in bu kadar uzun süre kullanıldığı ilk film The Shining'dir.

                    19 milyon dolara mal olan film ABD'de toplam 44.017.374 $ hasılat yapmıştır.

                    En fazla çekim tekrarı yapılan filmdir. Kubrick, Jack Nicholson'ın banyoya baltayla girmeye çalıştığı sahnede tam 127 tekrar almıştır.
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
    else if (name == 'taxi'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://pics.filmaffinity.com/Taxi_Driver-712853056-large.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Taxi Driver (Taksi Şoförü) - 1976 </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Taxi Driver, 1976 yapımını, yönetmenliğini Martin Scorsese'nin yaptığı film. Başrolünü Robert de Niro, Cybill Shepherd, Jodie Foster ve Harvey Keitel paylaşmıştır. Film 4 dalda Oscar'a aday olmuş ve Cannes Film Festivali'nde en iyi filme verilen Altın Palmiye ödülünü kazanmıştır. Amerikan Film Enstitüsü'nün hazırladığı, tüm zamanların en iyi 100 Amerikan filminin yer aldığı AFI's 100 Years... 100 Movies listesinde 52. sıradadır. Time dergisinin hazırladığı Tüm Zamanların En İyi 100 Filmi listesinde, 52. sırada yer almaktadır.

                    "Taksi Şoförü", 1994 yılında Kongre Kütüphanesi tarafından "kültürel, tarihi ve estetik olarak önemli" filmler arasına seçilerek ABD Ulusal Film Arşivi'nde muhafaza edilmesine karar verilmiştir.
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
    else if (name == 'lost'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/tr/thumb/b/b3/Lost_in_Translation_filmposteri.jpg/330px-Lost_in_Translation_filmposteri.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Lost in Translation (Bir Konuşabilse) - 2003 </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Bir Konuşabilse (İngilizce özgün adıyla Lost in Translation), 2003 yapımı Sofia Coppola filmi. 4 akademi ödülüne aday gösterilmiş, bunlardan En İyi Özgün Senaryo Akademi Ödülü'nü almayı başarmıştır. Diğer adaylıkları En İyi Film, Bill Murray ile En İyi Erkek Oyuncu ve Sofia Coppola ile En İyi Yönetmen dallarında idi.
                    
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
        height: 500,
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

export default CineInfoScreen;