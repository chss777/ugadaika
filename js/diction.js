const p = (person = "Личность, упоминаемая в Библии");
const ch = (character = "Качество характера");
const h = (humen = "Слово, характеризующее человека или группу людей");
const s = (soul = "Свойство души");
const l = (life = "Один из аспектов жизни человека");
const ms = (manState = "Состояние человека");
const ss = (soulState = "Состояние  духа, души или сердца");
const al = (aspectLife = "Один из аспектов жизни христианина");
const sin = "Один из упоминаемых в Библии грехов";
const v = (virtue = "Одна из добродетелей");
const ng = (negative = "Нечто негативное");
const sc = (social =
    "Социальный статус (положение в обществе, в церкви или в семье)");
const act = (action = "Действие, к которому призывает Господь");
const th = (theology = "Богословское понятие");
const r = (reaction = "Реакция человека на определённые обстоятельства");
const simbol = "Это слово в Библии часто имеет символичское значение";
const pb = (parables =
    "Одно из слов, которые Иисус употреблял в Своих притчах");
const pr = (prayer = "Это слово иногда встречается в молитвах");
const rel = (relstionship = "Слово из области межличностных отношений");
const cr = (create = "Одно из Божиих творений");
const w = (worship =
    "Относится либо относилось к области религии и поклонения");
const item = "Неодушевлённый предмет, дело рук человеческих";
const gg = (geograph = "Географическое название");
const god =
    "Как правило, это слово относится к Богу, к Его сущности или Его деяниям";
const time = "Указание на определённый период времени";
const hb = (humanBody =
    "Относится к физической части человека (его тело, часть тела или органы чувств)");
const place = "Общественное место либо место связанное с администрацией";
const un = (unclear =
    "Нечто необъяснимое, трансцендентное или трудное для восприятия");
const size =
    "Это слово используется для обозначения количества или меры чего-либо";
const st = (stone = "Камень");
const pl = (plant = "Растение");
const an = (animals = "Живое существо");
const metal = "Металл";
const verb = "Глагол";
const room = "Помещение";
const music = "Музыкальный инструмент";
const hw = houseware = "Домашняя утварь";
const cloth = "Одежда";
const money = "Денежная единица";
const war = "Часть воинского снаряжения";


const diction = {
    КРОТОСТЬ: ch,
    СМИРЕНИЕ: v,
    СМИРЕННОМУДРИЕ: v,
    БЛАГОГОВЕНИЕ: ss,
    ДЕРЗНОВЕНИЕ: ss,
    УПОВАНИЕ: ss,
    ВЕЛИКОДУШИЕ: v,
    БЛАГОСТЬ: v,
    СВЯТОСТЬ: god,
    БЛАГОЧЕСТИЕ: v,
    ЦЕЛОМУДРИЕ: v,
    СОКРУШЕНИЕ: ss,
    НАЗИДАНИЕ: al,
    ВОСПИТАНИЕ: l,
    ПОВИНОВЕНИЕ: l,
    ЗЛОСТРАДАНИЕ: al,
    УНИЧИЖЕНИЕ: al,
    СЕТОВАНИЕ: r,
    СКРОМНОСТЬ: v,
    СОВЕРШЕНСТВО: act,
    ВОЗРОЖДЕНИЕ: th,
    ОСВЯЩЕНИЕ: act,
    ВЕРНОСТЬ: v,
    ТРЕЗВОСТЬ: v,
    БОДРСТВОВАТЬ: act,
    БЛАГОРАЗУМИЕ: v,
    ВЕРА: s,
    НАДЕЖДА: s,
    ЛЮБОВЬ: s,
    СОВЕСТЬ: s,
    НРАВЫ: l,
    ПОКАЯНИЕ: act,
    РАСКАЯНИЕ: r,
    ИСКУШЕНИЯ: al,
    ИСПЫТАНИЯ: al,
    НИЩИЕ: sc,
    БЛАЖЕНСТВО: ss,
    РЕВНОВАТЬ: ss,
    РЕВНОСТЬ: s,
    ЧИННОСТЬ: v,
    БЕСЧИНСТВО: sin,
    ИГО: pb,
    ТРУП: pb,
    ОРЛЫ: pb,
    БЛАГОДУШЕСТВОВАТЬ: ss,
    РАДУШИЕ: v,
    ПЕРСТЬ: simbol,
    ВОПЛЬ: r,
    УСЛЫШЬ: pr,
    УБЛАЖАТЬ: rel,
    ПРОСТОТА: ch,
    ПРОСТОДУШИЕ: ch,
    МАЛОДУШИЕ: ch,
    ПРИЗРЕТЬ: rel,
    ПРЕЗРЕТЬ: rel,
    ЛУКАВСТВО: rel,
    КОВАРСТВО: rel,
    ХИТРОСТЬ: rel,
    ГНУШАТЬСЯ: rel,
    МЕРЗОСТЬ: ng,
    ПОХОТЬ: ng,
    ВОЖДЕЛЕНИЕ: ss,
    СТРАСТЬ: ss,
    СЛАДОСТРАСТИЕ: sin,
    СЛАСТОЛЮБИЕ: sin,
    ЛЮБОСТРАСТИЕ: sin,
    НЕЧИСТОТА: sin,
    ПРЕЛЮБОДЕЯНИЕ: sin,
    БЛУД: sin,
    ИДОЛОСЛУЖЕНИЕ: sin,
    ВОЛШЕБСТВО: sin,
    СОБЛАЗНЫ: l,
    ЛЮБОСТЯЖАНИЕ: sin,
    ЛИХОИМСТВО: sin,
    ЛЕСТЬ: rel,
    ОБОЛЬЩЕНИЕ: ss,
    ПРЕЛЬЩАТЬ: verb,
    ГОРДОСТЬ: sin,
    НАДМЕННОСТЬ: ch,
    ДЕРЗОСТЬ: ch,
    НАГЛОСТЬ: ch,
    НАПЫЩЕННОСТЬ: ch,
    СТРОПТИВОСТЬ: ch,
    СВАРЛИВОСТЬ: ch,
    БИЙЦА: ch,
    КОЩУНСТВО: sin,
    ВЕРОЛОМСТВО: rel,
    НЕВЕЖДА: h,
    ВЕДЕНИЕ: al,
    ХУЛА: sin,
    ПОРУГАНИЕ: al,
    ИЗМОЖДЕНИЕ: ms,
    ОГОРЧЕНИЕ: ms,
    ОСКОРБЛЕНИЕ: rel,
    НЕУДОБОВРАЗУМИТЕЛЬНОЕ: un,
    ЗАБЛУЖДЕНИЕ: ms,
    ЛИЦЕПРИЯТИЕ: sin,
    ЛИЦЕМЕРИЕ: sin,
    МЕРТВЕЦЫ: h,
    МУЖ: sc,
    СУЕТА: l,
    ПРЕДУПРЕДИТЬ: rel,
    ПОЗОРИЩЕ: al,
    НЕИЗРЕЧЕННО: un,
    УНЫНИЕ: ss,
    ПЕЧЕТСЯ: rel,
    ХВАЛА: r,
    БЛАГОСЛОВИ: pr,
    БЛАГОДАТЬ: th,
    МИЛОСТЬ: v,
    АМИНЬ: pr,
    ИСКУСНЫЕ: h,
    ПОДВИЗАТЬСЯ: act,
    ПОДВИГ: al,
    ПОНОШЕНИЕ: al,
    СТЕПЕННОСТЬ: v,
    ПОМАЗАНИЕ: th,
    УСЫНОВЛЕНИЕ: rel,
    АНГЕЛЫ: cr,
    ЦАРСТВИЕ: th,
    СТРОГОСТЬ: rel,
    ТВЕРДЬ: cr,
    НЕБО: cr,
    ПОСТОЯНСТВО: ch,
    БЛАГОСЛОВЕНИЕ: th,
    УРИМ: w,
    ТУММИМ: w,
    ААРОН: p,
    АВАДДОН: p,
    АВВА: pr,
    АВГУСТ: p,
    АВВАКУМ: p,
    АВДИЙ: p,
    АВЕЛЬ: p,
    АВЕССАЛОМ: p,
    АВРААМ: p,
    АГАВ: p,
    АГАТ: st,
    АГЕЙ: p,
    АДАМ: p,
    АГНЕЦ: simbol,
    АДОНАЙ: th,
    АКРИДЫ: an,
    АЛАВАСТР: hw,
    АЛКАТЬ: ms,
    АЛЛИЛУЙЯ: pr,
    АЛОЙ: pl,
    АЛЬФА: th,
    АМЕТИСТ: st,
    АМОС: p,
    АМФИТЕАТР: place,
    АНАФЕМА: th,
    АНГЕЛ: cr,
    АНИС: pl,
    АНТИХРИСТ: p,
    АПОСТОЛ: sc,
    АППОЛИОН: p,
    АРЕОПАГ: place,
    АРТЕМИДА: w,
    АРФА: music,
    АСПИД: an,
    АССАРИЙ: money,
    АСТАРТА: w,
    БЛАГОУТРОБИЕ: ss,
    БЛАГОУХАНИЕ: w,
    ВИФАНИЯ: gg,
    ВЛАСЯНИЦА: cloth,
    ВЛЕЧЕНИЕ: ms,
    ВНИКАТЬ: act,
    ВНИМАТЬ: verb,
    ВОАНЕРГЕС: p,
    ВОДВОРИТЬСЯ: th,
    ВОЗДЕВАТЬ: w,
    ВОЗДЫХАНИЕ: r,
    ВОЗЛЕЖАТЬ: l,
    ВОЗМУЩЕНИЕ: r,
    ВОЛХВ: h,
    ВОЛЧЕЦ: pl,
    ВОСКЛОНИТЬСЯ: verb,
    ВОСКРИЛИЕ: cloth,
    ВОСПРЯНУТЬ: ss,
    ВРЕТИЩЕ: ng,
    ВСЕЛЕННАЯ: cr,
    ВСУЕ: ng,
    ВЫСПРЕННЕЕ: "Нечто невообразимо высокое",
    ВЫЯ: hb,
    ГЕЕННА: th,
    ГНЕВ: r,
    ГОДИНА: time,
    ГОЛГОФА: gg,
    ГОРЛИЦА: an,
    ГОРНИЙ: simbol,
    ГОРНИЦА: room,
    ГОСПОДЬ: th,
    ГОФЕР: pl,
    ГУСЛИ: music,
    ДАВИД: p,
    ДАГОН: w,
    ДАЛИДА: p,
    ДВОЕДУШНЫЙ: ch,
    ДВУЯЗЫЧЕН: ch,
    ДЕВСТВЕННИК: h,
    ДЕЛАТЕЛЬ: h,
    ДЕННИЦА: cr,
    ДЕСНИЦА: pr,
    ДИАВОЛ: p,
    ДИВНЫЙ: god,
    ДОКУЧАТЬ: rel,
    ДРАКОН: cr,
    ДУБРАВА: cr,
    ДУХ: th,
    ДУША: th,
    ДЩЕРЬ: sc,
    ЕВАНГЕЛИЕ: th,
    ЕВНУХ: h,
    ЕВРЕЙ: h,
    ЕДИНОРОГ: an,
    ЕДОМ: gg,
    ЕЛЕЙ: w,
    ЕЛЛИНЫ: h,
    ЕЛЛИНИСТЫ: h,
    ЕММАНУИЛ: god,
    ЕНОХ: p,
    ЕПАНЧА: cloth,
    ЕПИСКОП: sc,
    ЕСТЕСТВО: cr,
    ЕФОД: cloth + ". " + w,
    ЕФРАФА: gg,
    ЕХИДНА: an,
    ЖЕЗЛ: gg,
    ЖЕМЧУГ: cr,
    ЖЕМЧУЖИНА: cr,
    ЖЕСТОКОВЫЙНЫЙ: ch,
    ЖИТНИЦА: item,
    ЖРЕЦ: sc,
    ЗАВЕТ: th,
    ЗАКЛАНИЕ: w,
    ЗАКЛИНАТЬ: rel,
    ЗАПЕЧАТЛЕНИЕ: simbol,
    ЗАПЯСТЬЕ: hb,
    ЗАУШАТЬ: rel,
    ЗЕНИЦА: hb,
    ЗЛАК: pl,
    ЗЛОПОЛУЧНЫЙ: ms,
    ЗЛОСЧАСТНЫЙ: ms,
    ЗЛОЧЕСТИВЫЙ: ss,
    ЗНАМЕНИЕ: god,
    ИЕГОВА: god,
    ИЕРЕЙ: sc,
    ИЕРУСАЛИМ: gg,
    ИЗВЕРГ: ch,
    ИЗГАРЬ: simbol,
    ИЗДРЕВЛЕ: time,
    ИЗДЫХАТЬ: ms,
    ИЗНЫВАТЬ: ms,
    ИЗРАИЛЬ: h,
    ИЗУМЛЕНИЕ: ms,
    ИЗУМРУД: st,
    ИИСУС: p,
    ИНОСКАЗАНИЕ: "Литературный жанр или приём",
    ИОАНН: p,
    ИОВ: p,
    ИОТА: simbol,
    ИПОСТАСЬ: th,
    ИРОДИАНЕ: h,
    ИСААК: p,
    ИСКОНИ: time,
    ИСКРЕННОСТЬ: v,
    ИСКУПИТЕЛЬ: god,
    ИСКУПЛЕНИЕ: th,
    ИСПОВЕДАНИЕ: w,
    ИСПОВЕДЫВАТЬСЯ: w,
    ИСПОЛИН: h,
    ИССОП: w,
    ИСТАЕВАТЬ: ms,
    ИСТОРГАТЬ: verb,
    ИСТЯЗАТЬ: ng + ". " + verb,
    ИСЧАДИЕ: ng,
    ИСЧАХНУТЬ: ms + ". " + ng,
    ИУДА: p,
    КАИН: p,
    КНИЖНИК: h,
    КИМВАЛ: music,
    КОВЫ: ng,
    КОДРАНТ: money,
    КОЗНИ: rel,
    КОЛЕСНИЦА: item,
    КОЛОДА: item,
    КОЛЧАН: war,
    КОРАЛЛ: cr,
    КОРВАН: w,
    КОСНЕТЬ: ng,
    КОСНОЯЗЫЧНЫЙ: h,
    КУМИР: w,
    КУПИНА: pl,
    КУЩА: item,
    ЛАНИТЫ: hb,
    ЛАНЬ: an,
    ЛАТЫ: war,
    ЛЕВИАФАН: cr,
    ЛЕВИТЫ: h,
    ЛЕГИОН: "Это слово в Библии, как правило, указывает на количество",
    ЛИВАН: pl,
    ЛИФОСТРОТОН: place,
    ЛОДЫЖКА: hb,
    ЛОЖЕСНА: hb,
    ЛОНО: hb,
    ЛЮБОПРЕНИЕ: sin,
    МАЛАКИЯ: h,
    МАЛАХИЯ: p,
    МАНДРАГОР: pl,
    МАНТИЯ: cloth,
    МАСЛИНА: pl,
    МАРИАМ: p,
    МЕССИЯ: god,
    МЗДА: rel,
    МИЛОТЬ: cloth,
    МИНДАЛЬ: pl,
    МИРО: w,
    МИРРА: pl,
    МОЖЖЕВЕЛОВЫЙ: pl + " (часть речи - прилагательное)",
    МОИСЕЙ: p,
    МОЛОХ: w,
    МОР: ng,
    МОРИА: gg,
    МУЖАТЬСЯ: al,
    МУЖЕСТВО: v,
    МУЖЕЛОЖСТВО: sin,
    МУЛ: an,
    МЫТАРЬ: h,
    НАЗОРЕЙСТВО: w,
    НАИПАЧЕ: "Это слово используется для акцента на чём-либо",
    НАЛОЖНИЦА: sc,
    НАПЕРСНИК: w,
    НАРАМНИК: w,
    НАРД: pl,
    НАРЕКАНИЕ: r,
    НАРЦИСС: pl,
    НАСКУЧИТЬ: rel,
    НАСУЩНЫЙ: l,
    НАУШНИК: h,
    НЕВОЗБРАННО: "Когда сняты ограничения",
    НЕГОДОВАНИЕ: r,
    НЕИССЛЕДИМО: un,
    "НЕИСТОВО": "Степень реакции",
    НЕПРЕЛОЖНАЯ: god,
    НИЗРИНУЛСЯ: ng,
    НИКОЛАИТЫ: h,
    ОБЕТОВАНИЕ: th,
    ОБИТЕЛЬ: th,
    ОБЛЕЧЬСЯ: l,
    ОБЛИЧЕНИЕ: rel,
    ОБОНЯНИЕ: hb,
    ОБОЮДООСТРЫЙ: "Характеристика определённого военного предмета",
    ОБРОК: l,
    ОБРУЧЕНИЕ: l,
    ОБУЗДЫВАТЬ: verb,
    ОБЩИТЕЛЬНОСТЬ: ch,
    ОДЕСНУЮ: simbol,
    ОКРЕСТ: "Не далеко",
    ОНАН: p,
    ОНИКС: st,
    ОПАХАЛО: item,
    ОПРЕСНОК: w,
    ОСАННА: w,
    ОСЕНИТЬ: god,
    ОСУЕТИТЬСЯ: l,
    ОСЯЗАТЬ: hb,
    ОТПРЫСК: simbol,
    ОТРЕБЬЕ: h,
    ОТРИНУТЬ: verb,
    ОТРОДЬЕ: h,
    ОТРОК: sc,
    ОЦЕПЕНЕНИЕ: ms,
    ПАГУБА: ng,
    ПАЖИТЬ: simbol,
    ПАКИБЫТИЕ: th,
    ПАСХА: w,
    ПАТМОС: gg,
    ПЕЛИКАН: an,
    ПЕРВОРОДСТВО: sc,
    ПЕРЕНОСЧИК: sin,
    ПЕРСТ: hb,
    ПЛАКАЛЬЩИЦА: h,
    ПЛАЩАНИЦА: cloth,
    ПЛЕВА: simbol,
    ПЛЕВЕЛ: pl,
    ПЛОТЬ: hb,
    ПОДВИЖНИК: h,
    ПОДИР: cloth + ". " + w,
    ПОЕЛИКУ: "Указывает на причину",
    ПОКЛОН: w,
    ПОПРАНИЕ: rel,
    ПОПРИЩЕ: al + ". " + simbol,
    ПОРИЦАНИЕ: rel,
    ПОРОЖДЕНИЕ: h,
    ПОРУЧИТЕЛЬ: h,
    ПОРФИРА: cloth,
    ПОСМЕШИЩЕ: rel,
    ПОСМЕЯНИЕ: rel,
    ПОСОХ: item,
    ПОСРАМЛЕНИЕ: rel,
    ПОТЩИТЬСЯ: al,
    ПОЧЕЧУЙ: "Одна из Божиих кар за непослушание",
    ПРАВЕДНИК: h,
    ПРАЗДНОСТЬ: ms,
    ПРАХ: hb,
    ПРАЩА: war,
    ПРЕВРАТНО: ng,
    ПРЕВЫСПРЕНИЙ: un,
    ПРЕДАНИЕ: w,
    ПРЕДВАРИТЬ: verb,
    ПРЕДВЕРИЕ: room,
    ПРЕДВКУШАТЬ: ms,
    ПРЕДВОЗЛЕЖАНИЕ: ms,
    ПРЕДЗНАМЕНОВАНИЕ: god,
    ПРЕДПОЧТЕНИЕ: rel,
    ПРЕДТЕЧА: h,
    ПРЕИСПОДНЯЯ: th,
    ПРЕПИРАТЬСЯ: rel,
    ПРЕСВИТЕР: sc,
    ПРЕТКНОВЕНИЕ: l,
    ПРЕТОРИЯ: place,
    ПРЕХОДЯЩЕЕ: th,
    ПРЕЩЕНИЕ: god,
    ПРИБЕЖИЩЕ: "Безопасное место",
    ПРИЗРАК: un,
    ПРИЛЬНУТЬ: r,
    ПРИПАСТЬ: r,
    ПРИСНОСУЩИЙ: god,
    ПРИСТРАСТИЕ: ms,
    ПРИТЧА: "Литературный жанр или приём",
    ПРИХОТЬ: ss,
    ПРИЧАЩАТЬСЯ: w,
    ПРОВИДЕНИЕ: god,
    ПРОЗЕЛИТ: h,
    ПРОКАЗА: ng,
    ПРОКЛЯТИЕ: ng,
    ПРООБРАЗ: th,
    ПРОРЕКАТЬ: w,
    ПРОРОК: h,
    ПРЯМОДУШНЫЙ: ch,
    ПУРПУР: cloth,
    ПУЧИНА: simbol,
    ПЯДЬ: size,
    РАБ: sc,
    РАБОЛЕПСТВОВАТЬ: rel,
    РАВВИ: sc,
    РАЙ: th,
    РАКА: rel,
    РАМЕНА: hb,
    РАСТЛЕНИЕ: ng,
    РАТНИК: h,
    РАТОБОРЕЦ: h,
    РЕВНИТЕЛЬ: ms,
    РЕФАИМЫ: h,
    РИСТАЛИЩЕ: place,
    РОЖЕН: item,
    РОПОТ: r,
    РУБИН: st,
    РУБИЩЕ: cloth,
    РУГАТЬСЯ: rel,
    РЫКАТЬ: "То, что может делать хищный зверь",
    САВАОФ: god,
    САВЛ: p,
    САДДУКЕИ: h,
    САМАРЯНЕ: h,
    САМСОН: p,
    САМУИЛ: p,
    САПФИР: st,
    САРДИС: st,
    САРРА: p,
    САТАНА: p,
    САУЛ: p,
    СВИРЕЛЬ: music,
    СВЯТИЛИЩЕ: w,
    СВЯТОТАТСТВОВАТЬ: sin,
    СЕКИРА: hw,
    СЕНЬ: simbol,
    СЕРАФИМ: cr,
    СИКЕРА: "Напиток",
    СИКОМОР: pl,
    СИНАГОГА: w,
    СИНЕДРИОН: place,
    СИФ: p,
    СКИМЕН: cr,
    СКИНИЯ: w,
    СКИПЕТР: item,
    СКИФЫ: h,
    СКНИПА: cr,
    СКОПЦЫ: h,
    СКОТОЛОЖЕСТВО: sin,
    СКРИЖАЛИ: w,
    СЛАВОСЛОВИЕ: w,
    СЛОВОПРЕНИЕ: rel,
    СМАРАГД: st,
    СМЕХОТВОРСТВО: sin,
    СМИРНА: "Благовоние",
    СМОКОВНИЦА: pl,
    СМУЩЕНИЕ: r,
    СМЯТЕНИЕ: r,
    СНЕДЬ: l,
    СОВЕТНИК: h,
    СОВЛЕЧЬСЯ: verb,
    СОГЛЯДАТАЙ: h,
    СОЗИДАНИЕ: al,
    СОНМ: size,
    СОПЕРНИК: rel,
    СОРАСПЯТЬСЯ: al,
    СОСТРАДАНИЕ: v,
    СОСТЯЗАТЬСЯ: rel,
    СОТНИК: sc,
    СОФОНИЯ: p,
    СПОДВИЖНИК: h,
    СПОДОБИТЬСЯ: al,
    СТАРЕЙШИНА: sc,
    СТАРЕЦ: h,
    СТЕНАНИЯ: r,
    СТЕНАТЬ: r,
    СТЕГНО: hb,
    СТЕФАН: p,
    СТИХИЯ: cr,
    СТОИКИ: h,
    СТРАННОЛЮБИЕ: v,
    СТРАУС: an,
    СТЫДЛИВОСТЬ: ch,
    СУББОТСТВО: th,
    СУЕСЛОВ: h,
    СУЩЕСТВО: cr,
    СУЩНОСТЬ: "Смысл",
    ТАЙНА: un,
    ТАТЬ: h,
    ТВАРЬ: cr,
    ТЕМНИЦА: ng,
    ТЕРАФИМЫ: cr,
    ТЕТИВА: war,
    ТИМПАН: music,
    ТИРАН: h,
    ТМИН: pl,
    ТОЛИКОМ: size,
    ТОПАЗ: st,
    ТОЧИЛО: item,
    ТРАПЕЗА: l,
    ТУК: w,
    ТУТ: pl,
    ТУШКАНЧИК: an,
    ТЩАНИЕ: v,
    ТЩЕСЛАВИЕ: sin,
    ТЩЕТА: l,
    ТЬМА: size,
    УДРУЧАТЬ: verb,
    УМИЛЕНИЕ: r,
    УМЫСЕЛ: ng,
    УСОМНИТЬСЯ: ss,
    УТОЛИТЬ: simbol,
    УТРОБА: hb,
    УЧАСТЬ: l,
    УЦ: gg,
    ФАРИСЕИ: h,
    ФЕЛОНЬ: cloth,
    ХАЛДЕИ: h,
    ХАЛКОЛИВАН: metal,
    ХАЛКИДОН: st,
    ХАМ: p,
    ХАМЕЛЕОН: an,
    ХАМОС: w,
    ХЕРУВИМ: cr,
    ХЕТТУРА: p,
    ХИТОН: cloth,
    ХЛЕБЫ: l,
    ХОДАТАЙ: h,
    ХОРИВ: gg,
    ХРАМ: w,
    ХРАМИНА: simbol,
    ХРИЗОЛИТ: st,
    ЦЕВНИЦА: music,
    ЦЕПЕНЕТЬ: r,
    ЦИТРА: music,
    ЧАДО: sc,
    ЧАДОРОДИЕ: l,
    ЧАРОДЕЙ: h,
    ЧАЯНИЕ: ss,
    ЧЕЛО: hb,
    ЧЕЛОВЕКОХИЩНИК: h,
    ЧЕРМНОЕ: "Название одного из морей",
    ЧЕРТОГ: room,
    ЧЕСТНОСТЬ: v,
    ЧЕТВЕРТОВЛАСТНИК: sc,
    ЧРЕСЛА: hb,
    ЧУДЕСА: un,
    ЧУДНЫЙ: god,
    ШЕОЛ: th,
    ЩЕДРОСТЬ: ch,
    ЭЛОИ: god,
    ЮРОДСТВО: ms,
    ЯЗЫЧНИК: h,
    ЯРОСТЬ: r,
    ЯСПИС: st,
    ЯХОНТ: st,
};
