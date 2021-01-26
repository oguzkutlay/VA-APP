import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const HistInfoScreen = (props) => {  
    var name = props.route.params.name;    
    if (name == 'fransız'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prise_de_la_Bastille.jpg/360px-Prise_de_la_Bastille.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Fransız İhtilali (1789) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Fransız Devrimi veya Fransız İhtilâli (1789-1799), Fransa'daki mutlak monarşinin devrilip, yerine cumhuriyetin kurulması ve Roma Katolik Kilisesi'nin ciddi reformlara gitmeye zorlanmasıdır. Avrupa ve Batı dünyası tarihinde bir dönüm noktasıdır. Sosyal bir akımı başlatan en büyük etkendir.

Fransız halkı önceki döneme göre büyük bir evrim geçirmektedir. Halk bilinçlenmektedir ve sarayın, kralın, seçkinlerin denetiminden çıkmaya başlamıştır. Şehirlerde yaşayan pek çok burjuva, büyük bir atılım içindedir. Kitaplar yaygınlaşmakta, aileler çocuklarını üniversitelere göndererek sağlam bir gelecek kurma yolunu tutarak kültürel seviyeyi yükseltmektedir. Bağımsız yayıncıların çıkardıkları gazete, bildiri ve broşürler, kitlesel bilinçlenmeye yol açmaktadır. Bu koşullar da toplumsal değişim taleplerinin olgunlaşmasına yol açmıştır.

Toprak sahipleri ve soylular ayrıcalıklarını korumaya çalışmakta; bu sebeple burjuvaların soylu tabakasına geçmesini engelleyecek barikatlar yükseltilmektedir. Soylular statülerini koruma hevesindeyken, burjuvalar da ekonomik olarak güçlenmelerine rağmen toplumsal haklarda söz sahibi olamamaktan şikâyetçidirler. Kırsal nüfus ise üzerindeki vergi yükünün hafiflemesini istemektedir.

Devrimci düşünce, ülkede köklü yapısal değişikliklere gitmesi gerektiğine inanan katmanlar arasında yayılmaya başlamıştır. Merkezi otorite ülkenin içinde bulunduğu evrimsel süreci kavrayamamış ve eski yöntemlerle sorunları halletme yolunu seçmiştir. Oysa özellikle burjuva, İngiliz devriminin etkisiyle geçici çözümle yetinmek değil, kitlesel olarak İngiliz modelindeki gibi ‘parlamenter monarşi rejimi’ altında yönetime katılmayı arzulamaktadır.
                    
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
    else if (name == 'rönesans'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={{height:500, width: 350}} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/255px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Rönesans </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Rönesans (Yeniden Doğuş), Orta Çağ ve Reformasyon arasındaki tarihi dönem olarak bilinir. 15 - 16. yüzyıl İtalya’sında batı ile klasik antikite (Eski Roma ve Yunan Eserlerinin incelenmesi) arasında sanat, bilim, felsefe ve mimarlıkta bağın tekrar kurulmasını sağlayan, Antik Yunan filozof ve bilim insanlarının çalışmalarının çeviri yoluyla alındığı, deneysel düşüncenin canlandığı, insan yaşamı (hümanizm) üzerine yoğunlaşıldığı, matbaanın bulunmasıyla bilginin geniş kitlelerle paylaşımının arttığı ve radikal değişimlerin yaşandığı dönemdir.

Bu çağ uzun zamandır geriye düşmüş olan Avrupa'nın ticaret ve Coğrafi Keşifler'le yükselişinin öncüsü olmuştur. İtalyan rönesansı bu dönemin başlangıcı sanatsal ve bilimsel gelişmeyi ifade eder. İlk kez İtalyan sanatçı Giorgio Vasari tarafından Vite'de kullanılmış, 1550 yılında basılmıştır. Rönesans teriminin kökeni Fransızca'dır. Fransız tarihçi Jules Michelet tarafından kullanılmış ve İsviçreli tarihçi Jacob Burckhardt tarafından geliştirilmiştir (1860'larda). Yeniden doğuş iki anlamı içerir. İlki antik klasik metinlerin tekrar keşfi, öğrenimi, sanat ve bilimdeki uygulamalarının tespitidir. İkinci olarak bu entelektüel aktivitelerin sonuçlarının Avrupalılık kültürünü genelde güçlendirmesidir. Bu yüzden Rönesans'tan bahsederken iki farklı fakat anlamlı yoldan söz edilebilir: Klasik öğrenmenin ve bilimin antik metinlerin tekrar keşfiyle yeniden doğması ve genel anlamda bir Avrupalılık kültürünün yeniden doğuşu. Raphael Sanzio ve Michelangelo gibi birçok ressam mevcuttur.

Rönesans döneminin yaratıcılığının esas yürütücü gücü tüccarlardır. Bunlar en kârlı ticaretin hangi alanda olduğunu araştırdılar ve bu yoldan sağladıkları zenginlikleri sanat ve endüstri yeniliklerine yatırdılar. Rönesans; Floransa, Venedik, İngiltere, Portekiz, Hollanda gibi büyük kent-devletlerinde ya da metropollerde doğmuştur.
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
    else if (name == 'magna'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://i2.wp.com/parlakjurnal.com/wp-content/uploads/2017/12/magna-carta-s%C3%B6zle%C5%9Fmesi.jpg?fit=795%2C626&ssl=1'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Magna Carta (1215) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Magna Carta (Latince: "Büyük Ferman") veya Magna Carta Libertatum (Latince: "Büyük Özgürlük Fermanı"), 1215 yılında imzalanmış bir İngiliz belgesidir. Bu belge ile kral ilk kez yetkilerini kısıtlamış ve derebeylere bazı haklar tanımıştır. Günümüzdeki anayasal düzene ulaşana kadar yaşanılan tarihi sürecin önemli basamaklarından birisidir. Aslen, Papa III. İnnocentius, Kral John ve baronları arasında, kralın yetkileri hususunu karara bağlamak amacıyla imzalanmıştır. Kralın bazı yetkilerinden feragat etmesini, kanunlara uygun davranmasını ve hukukun kralın arzu ve isteklerinden daha üstün olduğunu kabul etmesini zorunlu kılıyordu. Metinde kralın yetkilerini teoride kısıtlayan hükümler yer almaktaydı. 61. maddeye göre feodal kanunlara atıfta bulunuluyor ve 25 baronun kralın hükmüne karşı gelebileceğini belirtiyordu.
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
    else if (name == 'insan hakları'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Eleanor_Roosevelt_UDHR.jpg/300px-Eleanor_Roosevelt_UDHR.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> İnsan Hakları Evrensel Beyannamesi (1948) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    İnsan Hakları Evrensel Bildirisi (İngilizce: Universal Declaration of Human Rights ya da kısaca UDHR), Birleşmiş Milletler İnsan Hakları Komisyonu'nun Haziran 1948'de hazırladığı ve birkaç değişiklik yapıldıktan sonra 10 Aralık 1948'de, BM Genel Kurulu'nun Paris'te yapılan 183. oturumunda kabul edilen 30 maddelik bildiridir.

Bildirinin imzalanmasında, II. Dünya Savaşı'ndan sonra devletlerin, bireylere tanınan hak ve özgürlüklerin güvence altına alınması konusunda birleşmesi de etkili olmuştur. Eleanor Roosevelt bu bildiriyi "Bütün insanlık için bir "Magna Carta (Magna Karta)" olarak tanımlamıştır. Bildirinin imzalandığı 10 Aralık, Dünya İnsan Hakları Günü olarak kutlanır.
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
    else if (name == 'veba'){
        return (        
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text></Text>
                    <Image style={styles.thumb} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Egyptian_plague_of_boils_in_the_Toggenburg_Bible_%28black_and_white%29.jpg/450px-Egyptian_plague_of_boils_in_the_Toggenburg_Bible_%28black_and_white%29.jpg'}}/>
                    <Text></Text>
                    <Text style={styles.TitleText}> Kara Veba (1346 - 1353) </Text>
                    <Text></Text>
                    <View style={styles.card}>
                    <Text></Text>
                    <Text style={styles.InfoText}>
                    Kara Veba olarak da bilinen Kara Ölüm, insanlık tarihinde kaydedilen en ölümcül salgındır. Avrasya ve Kuzey Afrika'da 75-200 milyon kadar insanın ölümüne yol açtı. Yersinia pestis bakterisinin neden olduğu bir hastalık, veba idi. Yersinia pestis enfeksiyonu en yaygın olarak bubonik vebaya neden olur ancak septikemik veya pnömonik vebalara da neden olabilir.

Salgın, yalnızca 14. yüzyılda yaklaşık 200 milyon kişinin ölümüyle sonuçlanmıştır.

Çin ve Orta Asya'dan başlayan veba, 1347'de Kırım'da bir Ceneviz ticaret merkezini kuşatan Moğol ordusunun vebalı cesetleri mancınıkla kentin içine atmasıyla Avrupa'ya taşındı. Vebadan ölen soylular arasında Aragon Kralı IV. Pedro'nun karısı Kraliçe Leanor ve Kastilya Kralı XI. Alfonso'nun oğluyla evlenmeye giderken Bordeaux'da ölen, İngiltere kralı III. Edward'ın kızı Joan da vardı. İki Canterbury başpiskoposu art arda vebadan öldü. Şair Petrarca yalnızca pek çok şiirinin esin kaynağı Laura'yı değil koruyucusu Giovanni Colonna'yı da salgında yitirdi.

Kara Ölüm'ün Avrupa nüfusu üzerinde büyük bir etkisi olmuş ve Avrupa'nın sosyal temellerini değiştirmiştir. Roma Katolik Kilisesi için de büyük bir darbe olan Kara Ölüm; Museviler, Müslümanlar, yabancılar ve dilenciler başta olmak üzere azınlıklara zulmedilmesine yol açmıştır. Günlük yaşamın belirsizliği insanları o günü yaşamaya itmiş ve bu da Giovanni Boccaccio'nun 1353'de yazdığı Decameron'una yansımıştır.
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
        height: 300,
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

export default HistInfoScreen;