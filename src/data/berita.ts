import img1 from '../assets/img/IMG_0139.JPG';
import img2 from '../assets/img/20250922_152720.jpg';
import img3 from '../assets/img/blog-02/image1.jpg';
import img4 from '../assets/img/bg-2.jpg';
import img5 from '../assets/img/bg-3.jpg';
import img6 from '../assets/img/abt-1.jpeg';
import img7 from '../assets/img/abt-2.jpeg';
import img8 from '../assets/img/blog-01/20250416_093334.jpg';

export interface Article {
    slug: string;
    title: string;
    category: string;
    categoryId: string;
    date: string;
    author: string;
    editor: string;
    views: string;
    image: any;
    excerpt: string;
    content: string;
}

export const articles: Article[] = [
    {
        slug: 'belajar-sejak-dini-energi-hijau',
        title: 'SD CIKAL SERPONG GALI ILMU ENERGI ALTERNATIF DI BBPPMPV BMTI',
        category: 'Penguatan SDM',
        categoryId: 'sdm',
        date: '16 September 2026',
        author: 'Doni TP',
        editor: 'Tim Lestari',
        views: '125 Kali',
        image: img8,
        excerpt: 'SD Cikal Serpong mengambil langkah inspiratif dalam memperkenalkan isu energi terbarukan kepada para siswa sejak dini melalui kegiatan Overnight Field Trip Year 4 di BBPPMPV BMTI.',
        content: `
<p><strong>Cimahi, BBPPMPV BMTI</strong> – SD Cikal Serpong mengambil langkah inspiratif dalam memperkenalkan isu energi terbarukan kepada para siswa sejak dini. Melalui kegiatan <em>Overnight Field Trip Year 4</em>, sebanyak 100 siswa kelas 4 berkesempatan mengunjungi Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi (BBPPMPV) BMTI di Cimahi. Kunjungan ini menjadi bagian dari pembelajaran tematik bertajuk <em>Transformation of Energy and Alternative Energy Solutions</em>.</p>
<p>Program pembelajaran luar kelas ini dirancang untuk membuka wawasan siswa mengenai pentingnya energi terbarukan sebagai solusi atas krisis energi dan perubahan iklim. Sebagai sekolah yang mengusung pendekatan eksploratif dan praktik langsung, SD Cikal Serpong menjadikan kegiatan ini sebagai bagian integral dari kurikulum wajib mereka.</p>

<h3>Mengenal Empat Sumber Energi Terbarukan</h3>
<p>Selama kunjungan, para siswa dikenalkan secara langsung dengan empat jenis energi alternatif yang kini berkembang pesat di berbagai penjuru dunia dan Indonesia. Setiap sesi pembelajaran dilengkapi dengan praktik langsung dan demonstrasi alat peraga yang membuat siswa semakin mudah memahami konsep-konsep dasar energi.</p>

<h4>1. Energi Air (Hidro)</h4>
<figure>
    <img src="/img/blog-01/20250416_093020.jpg" alt="Materi Hidro">
    <figcaption>Widyaiswara Niamul Niam sedang menyampaikan materi hidro</figcaption>
</figure>
<p>Dalam sesi ini, siswa mempelajari bagaimana aliran air dimanfaatkan untuk menghasilkan listrik melalui teknologi turbin. Mereka melihat langsung prototipe pembangkit listrik tenaga mikrohidro dan belajar mengenai peran gravitasi dan debit air dalam menggerakkan turbin. Antusiasme siswa terlihat saat menyaksikan simulasi air yang mengaktifkan generator mini.</p>

<h4>2. Energi Biogas</h4>
<figure>
    <img src="/img/blog-01/20250416_094954.jpg" alt="Materi Biogas">
    <figcaption>Penjelasan proses pengolahan limbah menjadi biogas</figcaption>
</figure>
<p>Energi biogas menjadi materi yang sangat menarik perhatian siswa. Mereka diperlihatkan bagaimana limbah organik seperti kotoran hewan dan sisa makanan bisa diolah melalui proses fermentasi dalam <em>biodigester</em>, hingga menghasilkan gas metana yang dapat digunakan sebagai bahan bakar. Dari pembelajaran ini, siswa tidak hanya memahami proses energi, tetapi juga pentingnya pengelolaan limbah secara berkelanjutan.</p>

<h4>3. Energi Angin (Bayu)</h4>
<p>Di stasiun energi angin, siswa dikenalkan pada prinsip kerja turbin angin. Melalui praktik sederhana, mereka mencoba meniup baling-baling turbin mini dan melihat hasilnya berupa lampu kecil yang menyala. Aktivitas ini memberikan pengalaman menyenangkan yang memperkuat pemahaman konsep energi kinetik yang diubah menjadi energi listrik.</p>

<h4>4. Energi Surya</h4>
<figure>
    <img src="/img/blog-01/20250416_094019.jpg" alt="Materi Surya">
    <figcaption>Peserta sedang merakit minatur Hybrid PLTS</figcaption>
</figure>
<p>Sesi terakhir tak kalah seru, di mana siswa diajak merakit miniatur panel surya dan menangkap sinar matahari untuk menyalakan kipas kecil. Mereka juga mencoba merakit versi mini dari <em>Hybrid PLTS</em> (Pembangkit Listrik Tenaga Surya), lengkap dengan bimbingan dari instruktur ahli. Salah satu siswa, Artha, mengungkapkan rasa senangnya, “Rasanya seperti bermain, tapi kita bisa belajar banyak. Seru banget waktu merakit solar panel sendiri dan bisa nyalain kipas!”</p>

<h3>Belajar Serius dengan Cara yang Menyenangkan</h3>
<figure>
    <img src="/img/blog-01/20250416_093052.jpg" alt="Sesi pemaparan materi dan diskusi">
</figure>
<p>Tak hanya praktik, sesi kunjungan ini juga diisi dengan pemaparan materi singkat dan diskusi reflektif. Para siswa secara aktif berdialog dan mengajukan pertanyaan kepada para instruktur dan ahli dari Kompetensi Keahlian Teknik Energi Terbarukan BMTI. Kepala Komli TET, Ujang Ahmad Soebandi, mengaku terkesan dengan semangat para siswa.</p>
<blockquote>
    <p>“Anak-anak sangat antusias dan kritis. Mereka bertanya bagaimana energi ini bisa digunakan di rumah atau di daerah terpencil. Ini menunjukkan bahwa anak-anak kita memiliki kepedulian dan potensi besar menjadi agen perubahan sejak dini,” ujarnya.</p>
</blockquote>
<p>Senada dengan Kepala Sekolah SD Cikal Serpong, Vira Krisna Yuantari, menjelaskan bahwa kegiatan ini merupakan bagian dari implementasi kurikulum <em>Cikal 5 Stars Competencies</em>—kurikulum khas Cikal yang tetap mengacu pada standar nasional namun menekankan pada pembelajaran berbasis praktik, kompetensi nyata, dan penguatan minat serta bakat siswa.</p>

<h3>Menumbuhkan Kepedulian dan Aksi Nyata</h3>
<figure>
    <img src="/img/blog-01/20250416_105603.jpg" alt="Menumbuhkan Kepedulian dan Aksi Nyata">
    <figcaption>Foto bersama 100 peserta</figcaption>
</figure>
<p>Melalui kunjungan edukatif ini, diharapkan para siswa tidak hanya memahami konsep energi secara teoritis, tetapi juga tumbuh sebagai individu yang sadar akan pentingnya keberlanjutan lingkungan dan energi masa depan.</p>
<blockquote>
    <p>“Kami ingin membentuk karakter siswa yang tanggap terhadap isu global dan mampu berpikir kritis serta solutif. Energi hijau adalah masa depan, dan pemahamannya perlu ditanamkan sejak dini,” pungkas Vira.</p>
</blockquote>
<p><strong>***Penulis DONI TP (Editor: Tim Lestari)</strong></p>
        `
    },
    {
        slug: 'kembangkan-energi-hijau-lewat-sarana-praktik-plts',
        title: 'BBPPMPV BMTI Kembangkan Energi Hijau Lewat Sarana Praktik PLTS untuk Mobil Listrik',
        category: 'Infrastruktur & Fisik',
        categoryId: 'infrastruktur',
        date: '06 November 2025',
        author: 'Doni TP',
        editor: 'Tim Lestari',
        views: '342 Kali',
        image: img2,
        excerpt: 'BBPPMPV BMTI terus memperkuat peran strategisnya dalam mendukung kebijakan pemerintah menuju green economy melalui peresmian Sarana Praktik Pembangkit Listrik Tenaga Surya (PLTS) untuk Mobil Listrik.',
        content: `
<p><strong>Cimahi, 06/11/2025</strong> — Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi Bidang Mesin dan Teknik Industri (BBPPMPV BMTI) terus memperkuat peran strategisnya dalam mendukung kebijakan pemerintah menuju green economy dan care economy melalui pengembangan pendidikan vokasi berbasis energi bersih dan berkelanjutan. Langkah nyata tersebut diwujudkan dengan peresmian Sarana Praktik Pembangkit Listrik Tenaga Surya (PLTS) untuk Mobil Listrik yang berlangsung di Kampus BBPPMPV BMTI, Cimahi.</p>
<p>Kegiatan ini sejalan dengan visi besar pemerintah dalam mencapai Net Zero Emission tahun 2060, sebagaimana tertuang dalam Rencana Umum Energi Nasional (RUEN) dan kebijakan transisi energi bersih. Pemerintah menempatkan sektor pendidikan vokasi sebagai salah satu pilar penting dalam menyiapkan sumber daya manusia unggul yang mampu mendukung transformasi ekonomi hijau (<em>green transformation</em>) dan penguatan ekonomi peduli manusia (<em>care economy</em>).</p>
<p>Peresmian sarana praktik ditandai dengan penandatanganan prasasti, disaksikan oleh jajaran pimpinan BBPPMPV BMTI, pegawai, serta perwakilan dunia industri dan pendidikan. Fasilitas PLTS ini menjadi sarana pembelajaran terpadu yang mendukung implementasi energi terbarukan dalam bidang otomotif, terutama pada pengisian daya dan integrasi sistem mobil listrik berbasis tenaga surya. Fasilitas ini menjadi bagian penting dari upaya BBPPMPV BMTI dalam mendukung transisi energi bersih nasional, sejalan dengan agenda strategis pemerintah dalam pembangunan berkelanjutan.</p>
<p>Sarana praktik PLTS tersebut dimanfaatkan untuk pembelajaran dan pelatihan bagi pegawai serta guru vokasi pada program Teknologi Energi Terbarukan (TET). Program ini berkolaborasi dengan bidang Teknik Otomotif, di mana pelatihan terkait teknologi mobil listrik disampaikan oleh widyaiswara berlatar belakang otomotif, sementara aspek pemanfaatan dan integrasi tenaga surya dikembangkan oleh tim TET.</p>

<figure>
    <img src="/img/20250922_152924.jpg" alt="Fungsionalisasi PLTS">
    <figcaption>Fungsionalisasi Pembangkit Listrik Tenaga Surya (PLTS) pada Mobil Listrik</figcaption>
</figure>

<p>Melalui fasilitas ini, peserta pelatihan dapat mempelajari secara langsung konversi energi surya menjadi sumber daya listrik, proses pengisian daya mobil listrik, hingga sinkronisasi sistem energi terbarukan dengan kendaraan listrik modern. Pembelajaran ini juga menekankan penerapan teknologi terkini yang mendukung kendaraan ramah lingkungan. Pendekatan berbasis praktik tersebut memperkuat kemampuan guru dalam menerapkan Project Based Learning (PjBL) di sekolah masing-masing, sekaligus menumbuhkan kesadaran ekologis dalam pendidikan vokasi.</p>
<p>Kepala BBPPMPV BMTI, Dr. Anwar Sidarta, S.Si., M.Si., menyatakan bahwa keberadaan fasilitas ini menandai langkah konkret lembaganya dalam memperkuat kapasitas pendidikan vokasi di bidang energi hijau.</p>
<p><em>“PLTS ini bukan hanya fasilitas pembelajaran, tetapi juga laboratorium inovasi yang menumbuhkan budaya riset dan pengembangan teknologi hijau di lingkungan vokasi. Kita ingin memastikan guru dan tenaga kependidikan mampu menjadi penggerak utama dalam mewujudkan green economy di sektor pendidikan,”</em> ujarnya.</p>
<p>Sarana praktik PLTS juga menjadi contoh penerapan nyata konsep Green Campus dan Green Education, yang selaras dengan misi BBPPMPV BMTI untuk membangun lingkungan pembelajaran berkelanjutan, ramah lingkungan, dan adaptif terhadap perkembangan teknologi global.</p>
<p>Menteri Pendidikan Dasar dan Menengah, Prof. Dr. Abdul Mu’ti, M.Ed memberikan apresiasi terhadap langkah inovatif tersebut.</p>
<p><em>“Transformasi pendidikan vokasi harus sejalan dengan kebutuhan industri masa depan dan keberlanjutan lingkungan. Inisiatif seperti yang dilakukan BBPPMPV BMTI menunjukkan bahwa pendidikan vokasi Indonesia siap menjadi pionir dalam teknologi energi terbarukan, sejalan dengan arah pembangunan green economy dan care economy nasional,”</em> ungkapnya.</p>
<p>Inisiatif BBPPMPV BMTI ini diharapkan menjadi inspirasi bagi satuan pendidikan vokasi di seluruh Indonesia untuk mengintegrasikan prinsip keberlanjutan, kepedulian lingkungan, dan inovasi teknologi dalam setiap kegiatan pembelajaran khususnya dibidang vokasi.</p>
        `
    },
    {
        slug: 'grand-launching-program-green-office-2026',
        title: 'GRAND LAUNCHING PROGRAM GREEN OFFICE & GREEN CULTURE BBPPMPV BMTI TAHUN 2026',
        category: 'Tata Kelola & Sistem',
        categoryId: 'tatakelola',
        date: '4 Juni 2026',
        author: 'Doni TP',
        editor: 'Tim Lestari',
        views: '512 Kali',
        image: img3,
        excerpt: 'Menyambut Hari Lingkungan Hidup, BBPPMPV BMTI resmi memulai era baru tata kelola rendah karbon melalui peluncuran program Green Office & Green Culture 2026.',
        content: `
<p><strong>CIMAHI, BBPPMPV BMTI</strong> — Menyambut Hari Lingkungan Hidup, Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi Bidang Mesin dan Teknik Industri (BBPPMPV BMTI) resmi memulai era baru tata kelola rendah karbon. Melalui peluncuran program <em>Green Office & Green Culture 2026</em> di kawasan Kampus BMTI, Cimahi, Jawa Barat, Kamis (4/6), institusi ini menegaskan posisinya sebagai pionir <em>Green Campus</em> di Indonesia.</p>
<p>Langkah revolusioner ini diambil sebagai respons cepat sekaligus implementasi nyata dari Surat Edaran Kementerian Pendidikan Dasar dan Menengah Nomor 15 Tahun 2026 tentang Gerakan Nasional Indonesia ASRI (Aman, Sehat, Resik, dan Indah). Hajatan besar tersebut dihadiri oleh lintas sektoral, mulai dari jajaran institusi dibawah Kemendikdasmen di lingkungan Jawa Barat, Dinas Linkungan Hidup dan Dinas Pendidikan Kota Cimahi, jajaran Forkopimda, mitra industri, hingga tokoh masyarakat setempat.</p>

<h3>Transformasi Fundamental, Bukan Sekadar Kosmetik Visual</h3>
<figure>
    <img src="/img/blog-02/image3.jpg" alt="Pelepasan Burung">
    <figcaption>Pelepasan Burung Kutilang Oleh Dirjen PMPK dan Kepala BBPPMPV BMTI</figcaption>
</figure>
<p>Acara yang diawali dengan kesegaran senam pagi bersama ini dibuka oleh Kepala Bagian Tata Usaha BBPPMPV BMTI, Heri Susanto, S.Kom., M.Kes. Dalam laporannya, Heri menegaskan bahwa momentum ini adalah komitmen bersama untuk meninggalkan pola kerja administrasi yang masih konvensional.</p>
<blockquote><p>"Ini bukan sekadar kosmetik visual, melainkan transformasi fundamental. Kami berkomitmen memangkas birokrasi kertas (paperless office), mewujudkan zero waste, dan menggeser budaya kerja lama menuju ekosistem digital yang bersih, adaptif, serta akuntabel." — Heri Susanto, S.Kom., M.Kes Kabag TU BBPPMPV BMTI</p></blockquote>
<p>Di atas lahan seluas 130.976 m², aksi nyata langsung dieksekusi secara simultan melalui harmonisasi lima pilar strategis:</p>
<ol>
<li><strong>Kemandirian Energi & Air</strong> dengan sinkronisasi operasional PLTS 20,8 kW dan PLTB 3 kW, rencana konstruksi PLTMH, serta pembangunan 20 unit sumur resapan demi menjaga ketahanan air tanah.</li>
<li><strong>Sirkularitas Ekonomi & Budaya</strong> dengan cara optimalisasi Tempat Pengelolaan Sampah Sementara (TPSS) berbasis 3 fraksi, konversi limbah plastik menjadi BBM via mesin Pirolisis, yang diperkuat dengan internalisasi prinsip 3R melalui <em>In-House Training</em> aparatur secara berkala.</li>
<li><strong>Sinergi Hijau (RTH)</strong> dengan aplikasi nanajemen lanskap partisipatif yang berkolaborasi erat dengan Dinas Lingkungan Hidup (DLH) Kota Cimahi untuk memastikan standar ekologis perkantoran tertinggi.</li>
</ol>

<h3>Vokasi Merespons Tantangan Global via Green Office</h3>
<p>Senada dengan hal tersebut, Kepala BBPPMPV BMTI, Dr. Baharudin, S.Pd., M.Pd., menyatakan bahwa langkah strategis ini diambil demi menyelaraskan pendidikan vokasi dengan tuntutan global, khususnya target <em>Sustainable Development Goals</em> (SDGs).</p>
<p>"Selamat datang kepada Bapak Dirjen dan seluruh stakeholders di Kampus Hijau BBPPMPV BMTI. Berdasarkan proyeksi World Economic Forum, green skills akan menjadi kompetensi yang paling diburu di dunia kerja hingga tahun 2030. Dunia vokasi tidak boleh tertinggal," ujarnya.</p>
<p>Dr. Baharudin menambahkan, penerapan tata kelola berbasis <em>Green Human Resource Management</em> (HRM) terbukti mampu mendongkrak produktivitas dan keterikatan (engagement) pegawai hingga di atas 20 persen. "Dengan spirit 'Vokasi Kuat, Industri Hebat', kami pastikan institusi ini menjadi pelopor yang melahirkan SDM yang tidak hanya andal secara teknis, tapi juga melek ekologi," imbuhnya.</p>
<p>Gerakan ini sekaligus menjadi manifestasi nyata dari nilai ASN BerAKHLAK dan perwujudan Good Governance. Transformasi mencakup pengurangan penggunaan kertas secara drastis, efisiensi energi yang terukur, penanganan sampah berbasis Zero Waste Office, serta penciptaan budaya kerja yang kolaboratif, adaptif, dan sehat.</p>

<h3>Apresiasi Pusat: BBPPMPV BMTI sebagai Hub Vokasi Ramah Iklim</h3>
<figure>
    <img src="/img/IMG_0387.webp" alt="Pemasangan Biopori">
    <figcaption>Pemasangan Biopori oleh Dirjen PMPK dan Kepala BBPPMPV BMTI</figcaption>
</figure>
<p>Aksi nyata ini mendapat apresiasi penuh dari Direktur Jenderal Pendidikan Menengah dan Pendidikan Khusus, Tatang Mutaqin, S.Sos., M.Ed., Ph.D., yang hadir langsung untuk meresmikan program.</p>
<p>"Kehadiran Bapak dan Ibu sekalian membuktikan bahwa isu lingkungan adalah tanggung jawab kolektif kita bersama," kata Tatang dalam pidato kuncinya. Menurut Tatang, institusi publik yang mampu menekan emisi, transparan mengelola energi, dan bijak mengelola sampah akan mendapatkan public trust yang jauh lebih tinggi.</p>
<blockquote><p>"BMTI Cimahi harus menjadi role model nasional bagi seluruh ekosistem pendidikan vokasi. Dengan mengucap bismillah, Program Green Office & Green Culture resmi dibuka." — Tatang Mutaqin, Dirjen Dikmen Sus</p></blockquote>

<h3>Dari menanam Kemiri Sunan hingga Pelepasan Burung</h3>
<p>Usai seremoni peresmian, Dirjen Tatang Mutaqin didampingi Kepala Balai dan Kabag TU langsung memimpin aksi lapangan di area kampus. Aksi diawali dengan pemasangan lubang biopori secara simbolis untuk memaksimalkan infiltrasi air tanah dan mencegah genangan. Tak hanya itu, dilakukan pula penanaman Pohon Kemiri Sunan sebagai simbol mitigasi karbon dan konservasi lingkungan yang bernilai চট্টগ্রামের ekonomi terutama pendukung program pemerintah bahan bakar minyak alami terbarukan.</p>
<p>Sebagai penutup komitmen terhadap keseimbangan ekosistem lokal, dilakukan penebaran benih ikan nila di kolam kampus serta pelepasan burung kutilang ke alam bebas. Melalui gerakan ini, BBPPMPV BMTI optimistis transformasi dari lingkungan kantor mampu menular menjadi gerakan sosial yang lebih masif.</p>
<p><strong>Hijau Hari Ini, Lestari Selamanya.</strong></p>
        `
    },
    {
        slug: 'kisah-pohon-keben-bbppmpv-bmti',
        title: 'Kisah Pohon Keben BBPPMPV BMTI, Saksi Sejarah "Pohon Perdamaian Dunia" 1986',
        category: 'Flora Lingkungan',
        categoryId: 'flora',
        date: '15 September 2026',
        author: 'Tim Lestari',
        editor: 'Tim Lestari',
        views: '215 Kali',
        image: img4,
        excerpt: 'Di antara rimbunnya lanskap hijau kampus BBPPMPV BMTI, berdiri sebuah pohon sarat makna yang menyimpan rekam jejak sejarah penting bagi pelestarian lingkungan di Indonesia.',
        content: `
<p><strong>Cimahi, BBPPMPV BMTI</strong> — Di antara rimbunnya lanskap hijau kampus <strong>BBPPMPV BMTI</strong>, berdiri sebuah pohon sarat makna yang menyimpan rekam jejak sejarah penting bagi pelestarian lingkungan di Indonesia. Pohon tersebut adalah <strong>Keben</strong> (<em>Barringtonia asiatica</em>)—tanaman tangguh yang tidak hanya berfungsi secara ekologis, tetapi juga mengemban simbol perdamaian dunia.</p>

<h3>Jejak Historis: Dari "Tree for Peace" hingga Ditanam Gubernur Jabar</h3>
<p>Jauh sebelum isu perubahan iklim menjadi perhatian global seperti saat ini, pemerintah Indonesia telah menaruh komitmen besar terhadap kelestarian lingkungan. Pada peringatan <strong>Hari Lingkungan Hidup Sedunia tanggal 5 Juni 1986</strong> dengan mengusung tema <em>"A Tree for Peace"</em>, Presiden Republik Indonesia Soeharto secara resmi mencanangkan <strong>Keben</strong> sebagai <strong>Pohon Perdamaian Dunia</strong>.</p>
<p>Semangat global tersebut kemudian diabadikan secara nyata di lingkungan institusi. Pada tahun <strong>1988</strong>, sebuah pohon Keben ditanam secara langsung oleh Gubernur Jawa Barat di kawasan kampus BBPPMPV BMTI. Selama puluhan tahun, pohon bersejarah ini terus tumbuh subur, beradaptasi, dan menjadi saksi bisu perkembangan dunia pendidikan vokasi hingga hari ini.</p>

<h3>Mengenal Lebih Dekat Pohon Keben (<em>Barringtonia asiatica</em>)</h3>
<p>Dikenal pula dengan nama lokal seperti <em>butun</em> atau <em>putat laut</em>, tanaman ini merupakan flora khas pesisir tropis yang memiliki daya tahan luar biasa:</p>
<ul>
    <li><strong>Bentuk Buah yang Unik:</strong> Buah Keben berbentuk seperti kotak bersiku atau stupa lampion berserat tebal. Bentuk ini memungkinkannya mengapung di atas air laut untuk menyebarkan benih secara alami dari satu pulau ke pulau lainnya.</li>
    <li><strong>Bunga Eksotis:</strong> Memiliki bunga majemuk berbentuk menyerupai pom-pom dengan benang sari putih berujung merah jambu yang biasanya mekar pada malam hari.</li>
    <li><strong>Fungsi Ekologis:</strong> Tajuknya yang besar dan rimbun menjadikan pohon ini sangat ideal sebagai pelindung alami (<em>windbreaker</em>) penahan angin serta penjaga keseimbangan ekosistem.</li>
</ul>

<h3>Warisan Hidup yang Terus Dirawat</h3>
<p>Keberadaan Pohon Keben penanaman tahun 1988 di BBPPMPV BMTI kini bukan sekadar elemen lanskap biasa. Ia menjadi simbol hidup komitmen institusi dalam mengintegrasikan dunia pendidikan dengan kesadaran lingkungan (<em>Green Management System</em>).</p>
<p>Merawat pohon ini berarti menjaga warisan sejarah, merawat napas perdamaian, serta mewariskan kesadaran ekologis bagi setiap generasi civitas akademika dan masyarakat luas yang berkunjung ke kampus BBPPMPV BMTI.</p>
        `
    },
    {
        slug: 'menengok-kemiri-sunan',
        title: 'MENENGOK KEMIRI SUNAN, POHON KONSERVASI LAHAN KRITIS SEKALIGUS PELOPOR ENERGI BERSIH MASA DEPAN',
        category: 'Flora Lingkungan',
        categoryId: 'flora',
        date: '16 September 2026',
        author: 'Tim Lestari',
        editor: 'Tim Lestari',
        views: '180 Kali',
        image: img5,
        excerpt: 'Di antara ragam vegetasi yang memperkaya ruang hijau kita, terdapat satu spesies pohon rindang yang menyimpan potensi strategis luar biasa bagi ketahanan energi dan pemulihan lingkungan: Kemiri Sunan.',
        content: `
<p><strong>Cimahi, BBPPMPV BMTI</strong> — Di antara ragam vegetasi yang memperkaya ruang hijau kita, terdapat satu spesies pohon rindang yang menyimpan potensi strategis luar biasa bagi ketahanan energi dan pemulihan lingkungan: Kemiri Sunan (<em>Reutealis trisperma</em> (Blanco) Airy Shaw).</p>
<p>Pohon ini kerap dianggap serupa dengan kemiri bumbu dapur biasa (<em>Aleurites moluccanus</em>), padahal keduanya memiliki karakteristik biologis dan peruntukan fungsi yang bertolak belakang. Dalam kerangka kerja <em>Green Management System</em> (GMS), kemiri sunan menempati posisi istimewa sebagai tanaman perintis rekayasa lingkungan (<em>phytoremediation</em>) sekaligus produsen bahan bakar nabati (<em>biofuel</em>) berdaya saing tinggi.</p>

<h3>Asal-Usul dan Sejarah Etnobotani</h3>
<p>Kemiri sunan merupakan tumbuhan asli kawasan kepulauan Filipina. Pohon ini masuk ke Indonesia sekitar dekade 1930-an pada masa kolonial Belanda, awalnya sebagai koleksi tanaman di Kebun Raya Bogor dan bahan uji coba tanaman industri.</p>
<p>Pemberian nama lokal "Kemiri Sunan" memiliki riwayat menarik:</p>
<ul>
    <li><strong>Penamaan Rakyat:</strong> Dahulu, pohon ini banyak dijumpai tumbuh rindang di kawasan makam atau situs bersejarah para Sunan (Wali Songo) di tanah Jawa karena fungsinya sebagai pohon peneduh sakral yang berumur panjang.</li>
    <li><strong>Perbedaan Taksonomi:</strong> Secara ilmiah, kemiri sunan diklasifikasikan ke dalam genus <em>Reutealis</em>, sedangkan kemiri bumbu tergolong dalam genus <em>Aleurites</em>. Keduanya bernaung di bawah famili botani yang sama, yakni <em>Euphorbiaceae</em>.</li>
</ul>

<h3>Profil Botani dan Ciri Morfologi</h3>
<ul>
    <li><strong>Arsitektur Tajuk dan Batang:</strong> Pohon berkayu keras yang mampu tumbuh mencapai ketinggian 15 hingga 25 meter dengan kanopi melebar menyerupai payung raksasa, menjadikannya peneduh kawasan yang sangat efektif.</li>
    <li><strong>Morfologi Daun:</strong> Berbentuk hati lebar (<em>cordate</em>) atau bercuping tiga dengan tangkai daun panjang. Permukaan daun berwarna hijau mengilap dengan dua bintik kelenjar nektar (<em>gland</em>) di persambungan tangkai dan pangkal helai daun.</li>
    <li><strong>Bunga dan Buah:</strong> Bunganya majemuk berkelamin tunggal (<em>monoecious</em>) berwarna putih kemerahan. Buahnya berbentuk bulat sedikit pipih berdiameter 5–7 cm, bertekstur keras, dan umumnya berisi tiga butir biji berpunggung keras.</li>
</ul>

<h3>Nilai Ekologis dan Potensi Energi Hijau (Pilar GMS)</h3>
<p>Pemanfaatan kemiri sunan selaras dengan visi transisi energi bersih dan restorasi ekosistem berkelanjutan:</p>
<ul>
    <li><strong>Bahan Baku Biodiesel Unggulan (Non-Pangan):</strong> Biji kemiri sunan memiliki rendemen minyak nabati sangat tinggi, mencapai 50–56%. Berbeda dengan kelapa sawit yang bersaing dengan kebutuhan pangan, minyak kemiri sunan tidak dapat dikonsumsi (<em>non-edible oil</em>) karena mengandung asam lemak beracun. Sifat ini menjadikannya solusi ideal untuk bioenergi tanpa mengorbankan stabilitas pangan nasional.</li>
    <li><strong>Konservasi Tanah & Pemulihan Lahan Kritis:</strong> Sistem perakaran tunggangnya menembus profil tanah secara dalam dan diperkuat akar lateral yang mencengkeram kuat. Morfologi akar ini efektif mengikat agregat tanah lereng rawan longsor, menjaga sempadan air, serta merehabilitasi lahan terdegradasi.</li>
    <li><strong>Serapan Karbon Tinggi:</strong> Tajuk daun yang rimbun serta laju akumulasi biomassa yang cepat memberikan kapasitas penyerapan emisi karbon dioksida yang signifikan bagi perbaikan kualitas udara kawasan.</li>
</ul>

<h3>Panduan Keamanan & Tata Kelola Lingkungan</h3>
<p>Kendati kaya manfaat, aspek keselamatan dan tata kelola tetap menjadi prioritas edukasi GMS bagi masyarakat dan staf lapangan:</p>
<ul>
    <li><strong>Bukan Bumbu Dapur (Beracun bila Dikonsumsi):</strong> Biji kemiri sunan mengandung racun dan asam lemak tak jenuh ganda terkonjugasi yang memicu gastroenteritis akut, mual parah, dan keracunan fatal jika diolah sebagai bahan masakan.</li>
    <li><strong>Limbah Bungkil untuk Biopestisida & Kompos:</strong> Residu ampas biji hasil pengepresan minyak dimanfaatkan sebagai bahan baku biopestisida nabati pembasmi hama serta pupuk organik kaya hara nitrogen.</li>
    <li><strong>Pembersihan Buah Jatuh:</strong> Buah yang gugur dikumpulkan secara berkala oleh tim fasilitas untuk disalurkan ke unit percontohan pengolahan bioenergi.</li>
</ul>
<p>Melalui integrasi pohon kemiri sunan, tata kelola lingkungan membuktikan bahwa ruang terbuka hijau dapat menghadirkan harmoni antara keteduhan estetika, perlindungan tanah, dan inovasi energi terbarukan.</p>
        `
    },
    {
        slug: 'mengenal-hura-crepitans',
        title: 'MENGENAL HURA CREPITANS: POHON PURBA BERPERISAI BAJA DAN BUAH DINAMIT DI RUANG HIJAU KITA',
        category: 'Flora Lingkungan',
        categoryId: 'flora',
        date: '16 September 2026',
        author: 'Tim Lestari',
        editor: 'Tim Lestari',
        views: '290 Kali',
        image: img6,
        excerpt: 'Keberadaan pohon ini menjadi aset keanekaragaman hayati yang bernilai tinggi sekaligus menuntut perhatian khusus dalam tata kelola Green Management System (GMS).',
        content: `
<p><strong>CIMAHI, BBPPMPV BMTI</strong> — Di tengah rimbunnya pepohonan peneduh kawasan, berdiri tegak sebuah pohon raksasa dengan postur kokoh bercabang tinggi. Namun, jika didekati, pohon ini berbeda dari pohon taman pada umumnya: sekujur batangnya dilapisi ribuan duri runcing seperti perisai baja. Tumbuhan unik nan eksotis ini adalah <em>Hura crepitans</em>, atau yang populer di dunia internasional dengan sebutan <em>Sandbox Tree</em> maupun Pohon Dinamit.</p>
<p>Keberadaan pohon ini menjadi aset keanekaragaman hayati yang bernilai tinggi sekaligus menuntut perhatian khusus dalam tata kelola <em>Green Management System</em> (GMS), terutama terkait edukasi botani dan keselamatan pengunjung di sekitarnya.</p>

<h3>Asal-Usul dan Sejarah Etnobotani</h3>
<p><em>Hura crepitans</em> merupakan pohon hutan hujan tropis asli dari wilayah lembah Amazon (Amerika Selatan), Amerika Tengah, serta kepulauan Karibia. Pohon ini masuk ke dalam famili <em>Euphorbiaceae</em> (keluarga getah-getahan/kastuba) dan mampu tumbuh menjulang hingga 30–60 meter.</p>
<p>Nama unik "Sandbox Tree" berakar dari sejarah masa kolonial pada abad ke-18 hingga ke-19. Sebelum ditemukannya kertas isap (<em>blotting paper</em>), buah pohon ini yang berongga-rongga dikosongkan dan diisi pasir halus. Pasir tersebut ditaburkan di atas dokumen untuk mengeringkan sisa tinta pena bulu (<em>quill</em>) agar tulisan tidak blobor. Di habitat aslinya, getah pohon ini juga dimanfaatkan secara tradisional oleh suku pedalaman Amazon untuk melumuri mata anak panah dan membius ikan di sungai.</p>

<h3>Tiga Mekanisme Pertahanan Alami</h3>
<p>Spesies ini dikenal memiliki sistem pertahanan mandiri paling komplet di dunia tumbuhan:</p>
<ul>
    <li><strong>Batang Berzirah Duri (<em>Armored Trunk</em>):</strong> Kulit batangnya dipenuhi tonjolan duri kerucut keras berukuran 1–2 cm. Duri ini berfungsi sebagai pertahanan alami untuk mencegah satwa herbivora atau hewan pemanjat memakan dedaunan mudanya.</li>
    <li><strong>Buah Berdaya Ledak (<em>Explosive Balochory</em>):</strong> Buahnya berbentuk kapsul berlekuk 12–16 rongga menyerupai labu mini. Saat buah matang dan mengering di dahan tinggi, terjadi akumulasi tegangan mekanis selulosa yang sangat kuat. Ketika batas elastisitas terlampaui, buah akan meletup disertai dentuman keras, melontarkan biji secepat 240–250 km/jam hingga radius 30 sampai 45 meter.</li>
    <li><strong>Getah Kimiawi Kaustik (<em>Huratoxin</em> & <em>Crepitin</em>):</strong> Seluruh jaringan batang dan ranting menghasilkan getah putih pekat yang mengandung senyawa racun <em>huratoxin</em> (golongan diterpenoid daphnane kaustik) serta lektin toksik <em>crepitin</em> pada bijinya. Kontak langsung getah pada kulit dapat menyebabkan dermatitis dan rasa terbakar parah, serta berisiko fatal bagi penglihatan bila terpercik ke kornea mata.</li>
</ul>

<h3>Panduan Interaksi & Keselamatan Lingkungan (GMS Action)</h3>
<p>Dalam kerangka pengelolaan fasilitas hijau yang berkelanjutan, pohon ini dirawat sebagai media edukasi sains lingkungan, bukan ancaman yang harus ditebang. Namun, demi keselamatan bersama, Tim Humas GMS mengimbau seluruh staf, warga, dan pengunjung untuk mematuhi protokol berikut:</p>
<ul>
    <li><strong>Jaga Jarak Kontak:</strong> Hindari bersandar, memeluk, atau memanjat batang pohon. Duri dapat menembus pakaian dan berpotensi mencederai kulit.</li>
    <li><strong>Waspada Area Tajuk saat Musim Kering:</strong> Hindari memarkir kendaraan atau menggelar aktivitas tepat di bawah naungan kanopi saat cuaca terik/kemarau, karena buah matang memiliki kecenderungan meletup pada kondisi kelembapan rendah.</li>
    <li><strong>Dilarang Mengonsumsi Bagian Pohon:</strong> Biji dan serpihan buah yang jatuh di tanah dilarang keras untuk dikonsumsi maupun dijadikan mainan anak-anak.</li>
    <li><strong>Pertolongan Pertama:</strong> Apabila terkena cipratan getah secara tidak sengaja, segera basuh menggunakan air bersih mengalir dan sabun selama minimal 15 menit, lalu periksakan diri ke unit medis terdekat.</li>
</ul>
<p>Keberadaan <em>Hura crepitans</em> membuktikan betapa luar biasanya adaptasi pertahanan alam raya. Mari kita pelajari keunikannya dengan penuh rasa hormat dari jarak yang aman.</p>
        `
    },
    {
        slug: 'mengenal-pohon-kepel',
        title: 'Mengenal Pohon Kepel (Stelechocarpus burahol): Flora Identitas Yogyakarta yang Langka dan Sarat Filosofi',
        category: 'Flora Lingkungan',
        categoryId: 'flora',
        date: '16 September 2026',
        author: 'Tim Lestari',
        editor: 'Tim Lestari',
        views: '130 Kali',
        image: img7,
        excerpt: 'Pohon Kepel (atau kerap disebut juga burahol atau ki burahol) adalah pohon buah tropis legendaris yang kini berstatus sebagai tanaman langka di Indonesia.',
        content: `
<h3>1. Pengenalan Umum & Status Kelangkaan</h3>
<p>Pohon Kepel (atau kerap disebut juga <em>burahol</em> atau <em>ki burahol</em>) adalah pohon buah tropis legendaris yang kini berstatus sebagai tanaman langka di Indonesia. Tanaman ini ditetapkan sebagai <strong>flora identitas resmi Provinsi Daerah Istimewa Yogyakarta</strong> karena keterikatannya yang sangat kuat dengan sejarah dan tradisi para bangsawan di lingkungan keraton.</p>

<h3>2. Ciri-Ciri Morfologi yang Unik</h3>
<ul>
    <li><strong>Batang dan Percabangan:</strong> Pohon ini dapat tumbuh besar mencapai tinggi 25 meter dengan diameter batang utama hingga 40 cm. Kulit batangnya berwarna cokelat kelabu hingga kehitaman.</li>
    <li><strong>Cauliflowery (Buah di Batang):</strong> Salah satu ciri paling unik dari pohon kepel adalah letak bunga dan buahnya. Bunga dan buah kepel <strong>tidak tumbuh di ujung ranting</strong>, melainkan bergerombol langsung menempel pada tonjolan-tonjolan di sekujur batang pohon (<em>cauliflowery</em>).</li>
    <li><strong>Bunga:</strong> Bunganya berkelamin tunggal dan beraroma harum. Bunga jantan biasanya tumbuh di bagian batang atas atau cabang tua, sementara bunga betina berada di bagian pangkal batang bawah.</li>
    <li><strong>Buah dan Daun:</strong> Buahnya berbentuk bulat lonjong menyerupai sawo berukuran besar dengan warna cokelat keabu-abuan saat muda dan berubah menjadi cokelat tua ketika matang. Daging buahnya manis dan membungkus beberapa biji yang cukup besar. Daunnya tunggal, berbentuk elips hingga lonjong meruncing dengan warna hijau gelap yang mengkilap.</li>
</ul>

<h3>3. Kegunaan Tradisional & "Deodoran Alami" Putri Keraton</h3>
<p>Pada masa lampau, buah kepel memegang fungsi estetika dan kesehatan yang eksklusif bagi kalangan istana:</p>
<ul>
    <li><strong>Deodoran Tradisional:</strong> Buah kepel sangat digemari oleh para putri Keraton Yogyakarta karena dipercaya berkhasiat sebagai <strong>deodoran alami</strong>. Konon, mengonsumsi buah ini dapat membuat keringat, napas, dan air seni beraroma harum seperti bunga mawar.</li>
    <li><strong>Manfaat Kesehatan:</strong> Secara tradisional, bagian daging buah dan daunnya juga dimanfaatkan untuk membantu memperlancar buang air kecil, mencegah inflamasi ginjal, serta membantu menurunkan kadar asam urat dan kolesterol.</li>
</ul>

<h3>4. Makna Filosofis</h3>
<p>Nama "Kepel" berasal dari kata dalam bahasa Jawa yaitu <em>kepel</em> (genggaman tangan) yang menyimbolkan <em>greget</em> atau niat yang kuat dalam bekerja, dipadukan dengan filosofi <em>watu</em> (dasar). Pohon kepel melambangkan <strong>"manunggaling sedya kaliyan gegayuhan"</strong>—yakni bersatunya niat yang kuat dengan kerja keras untuk mencapai cita-cita.</p>
        `
    }
];
