$(document).ready(function() {

    for (let i = 1; i <= 31; i++) {
        $('#tanggal').append(`<option value="${i}">${i}</option>`);
    }
    

    for (let i = 2026; i >= 1900; i--) {
        $('#tahun').append(`<option value="${i}">${i}</option>`);
    }
    

    function sumDigits(num) {
        let sum = 0;
        let numStr = num.toString();
        
        for (let i = 0; i < numStr.length; i++) {
            sum += parseInt(numStr[i]);
        }
        
        return sum;
    }
    

    function calculateLifePath(day, month, year) {

        let total = day + month + year;
        let hasil1 = total;
        

        while (total > 9) {
            total = sumDigits(total);
        }
        
        return {
            hasil1: hasil1,
            hasil2: sumDigits(hasil1),
            hasilAkhir: total
        };
    }
    

    function getLifePathMessage(number) {
        const messages = {
            1: {
                title: "Tanggal Lahir Anda Berada Pada Garis Hidup 1",
                content: `Orang dengan garis hidup 1 adalah pemimpin alami yang mandiri dan ambisius. Mereka memiliki kepercayaan diri yang kuat dan kemampuan untuk memulai proyek-proyek baru dengan energi dan determinasi tinggi. Individualis sejati, mereka tidak takut untuk mengambil risiko dan berdiri sendiri dalam menghadapi tantangan.

Kreativitas dan inovasi adalah kekuatan utama mereka. Mereka sering menjadi pelopor dalam bidang mereka, membawa ide-ide segar dan perspektif unik. Namun, mereka juga perlu belajar untuk bekerja dalam tim dan mendengarkan pendapat orang lain, karena kadang-kadang sifat independen mereka dapat membuat mereka terlihat keras kepala atau egois.

Dalam karir, mereka unggul di posisi kepemimpinan atau sebagai wirausahawan. Mereka memiliki drive yang kuat untuk sukses dan tidak mudah menyerah saat menghadapi rintangan.`
            },
            2: {
                title: "Tanggal Lahir Anda Berada Pada Garis Hidup 2",
                content: `Orang dengan garis hidup 2 adalah diplomat alami yang sensitif dan intuitif. Mereka memiliki kemampuan luar biasa untuk memahami perasaan orang lain dan menciptakan harmoni dalam hubungan. Kerjasama dan kemitraan sangat penting bagi mereka, dan mereka berkembang dalam lingkungan yang mendukung dan penuh kasih.

Mereka adalah pendengar yang baik dan seringkali menjadi penengah dalam konflik. Kemampuan mereka untuk melihat berbagai perspektif membuat mereka sangat berharga dalam situasi yang memerlukan diplomasi dan tact. Namun, mereka perlu berhati-hati untuk tidak kehilangan identitas mereka sendiri dalam usaha membantu orang lain.

Sensitivitas mereka dapat membuat mereka rentan terhadap kritik, dan mereka mungkin perlu mengembangkan kulit yang lebih tebal. Dalam karir, mereka unggul dalam peran yang melibatkan konseling, mediasi, atau pekerjaan tim.`
            },
            3: {
                title: "Tanggal Lahir Anda Berada Pada Garis Hidup 3",
                content: `Bagi mereka yang jumlah angka hari lahirnya 3, ekspresi, sosialisasi, dan kreativitas sebagai pelajaran yang harus ditemani dalam hidupnya. Entertainer kelas dunia, orangorang yang berkilau dan optimistik termasuk di dalamnya. Orang-orang dengan garis hidup 3 yang telah mengasah bakatnya mempunyai bakat kreatif yang lahirnya, biasanya dalam verbal, tulisan, akting, atau teriisannya. Itu yang harus dicapainya dalam hidup adalah kepuasan dalam berekspresi. Sisi cerah bagi orang-orang ini bertema harmoni, keindahan dan kesenengan, karena itu. Mereka juga serba bisa, mampu untuk menangani berbagai macam tugas dan ekspresi kreatif adalah misi tertinggi bagi angka garis hidup ini. Karakter mereka hangat dan bersahabat, pembawa yang baik, sosial dan terbuka.

Pembawaan yang trampil dalam seni bukan hanya seorang yang menyenangkan untuk didengar, tapi lebih penting lagi, seseorang yang mampu untuk mendengarkan. Mereka adalah individu-individu yang selalu diterima dengan baik dalam setiap situasi sosial, dan juga mengerti bagaimana membuat orang merasa diterima. Potensi imajinasi kreatif mereka yang tinggi membolehkan mereka untuk banyak bergeser dari satu bidang atau mengembangkan potensi ini. Siapapun melihat kehidupan hampir selalu positif, dan pembawaan yang riang dan terbuka, Anda bisa mengatasi banyak halangan dalam hidup dengan efektif dan langsung kembali bersemangar. Anda mempunyai tata krama yang baik dan romantis, lebih suka tata warna yang baik dan emosi orang lain. Hidup ajiblah sepenuhnya.

Anda tidak terlalu pendai menangani perihal keuangan karena tidak menganggap penting hal uang. Sisi negatifnya, akan mereka dalam hidup bisa sangat ringan sampai membuatnya jadi superifisial. Kemampuan Anda seringkali tersebar terlalu tipis, dan jadi kehilangan fokus. Mereka dengan angka garis hidup 3 ini adalah teka-teki, dan Anda seringkali berganti mood dan cenderung sulut baik Anda untuk menatap dunia dengan terbesar. Sulit bagi mereka tertentuk setiap mencari stimulasi dan orang-orang yang keaunan. Sifat Anda yang ringan ini mendukung Anda untuk bisa melesat, dan Anda mampu melukiskan berbagai macam talent. Anda bisa melampaui banyak manuasiakan selamanya. Anda selalu gemblra, penuh inspirasi, dan selalu mencari stimulasi dari orang-orang yang seaunan. Sifat Anda tertarik dalam banyak hal, baik melakis, disain interior, landskep, menulis, musik, teater, ataupun mampu seluruhnya. Anda adalah orang yang bisa mengalami macam talenta yang Anda miliki dan bisa menjadi mampu berbagai hal yang besunan. Sifat Anda yang terlalu ringan mudah mendukunga Anda untuk bisa melukiskan ataupun menjadi orang-orang yang tealuaun.`
            },
            4: {
                title: "Tanggal Lahir Anda Berada Pada Garis Hidup 4",
                content: `Orang dengan garis hidup 4 adalah pekerja keras yang praktis, terorganisir, dan dapat diandalkan. Mereka memiliki fondasi yang kuat dan pendekatan sistematis terhadap kehidupan. Stabilitas dan keamanan sangat penting bagi mereka, dan mereka bersedia bekerja keras untuk mencapai tujuan jangka panjang mereka.

Mereka sangat detail-oriented dan memiliki kemampuan luar biasa untuk membangun struktur dan sistem yang efisien. Kejujuran dan integritas adalah nilai-nilai inti mereka, dan mereka mengharapkan hal yang sama dari orang lain. Mereka adalah tipe orang yang dapat Anda andalkan dalam situasi sulit.

Namun, mereka kadang-kadang bisa terlalu kaku atau resisten terhadap perubahan. Mereka perlu belajar untuk lebih fleksibel dan terbuka terhadap cara-cara baru. Dalam karir, mereka unggul dalam peran yang memerlukan perencanaan, organisasi, dan perhatian terhadap detail seperti akuntansi, manajemen proyek, atau teknik.`
            },
            5: {
                title: "Tanggal Lahir Anda Berada Pada Garis Hidup 5",
                content: `Orang dengan garis hidup 5 adalah petualang yang energik, penuh dengan kebebasan dan perubahan. Mereka memiliki rasa ingin tahu yang tak pernah puas dan keinginan kuat untuk mengalami segala sesuatu yang ditawarkan kehidupan. Fleksibilitas dan adaptabilitas adalah kekuatan utama mereka.

Mereka sangat sosial dan mudah bergaul, dengan kemampuan untuk berkomunikasi dengan berbagai macam orang. Mereka menikmati variasi dan tidak suka rutinitas yang membosankan. Kebebasan pribadi sangat penting bagi mereka, dan mereka akan merasa terkekang dalam situasi yang terlalu terstruktur atau membatasi.

Namun, mereka perlu belajar untuk lebih disiplin dan fokus, karena kecenderungan mereka untuk mencari hal-hal baru dapat membuat mereka kesulitan menyelesaikan proyek. Mereka juga perlu berhati-hati dengan kecenderungan untuk berlebihan dalam kesenangan sensual. Dalam karir, mereka unggul dalam bidang yang melibatkan perjalanan, komunikasi, atau penjualan.`
            },
            6: {
                title: "Tanggal Lahir Anda Berada Pada Garis Hidup 6",
                content: `Orang dengan garis hidup 6 adalah pengasuh alami yang penuh kasih sayang dan tanggung jawab. Mereka memiliki keinginan kuat untuk menciptakan harmoni dan keseimbangan dalam lingkungan mereka. Keluarga dan hubungan dekat sangat penting bagi mereka, dan mereka seringkali menempatkan kebutuhan orang lain di atas kebutuhan mereka sendiri.

Mereka memiliki sense of justice yang kuat dan seringkali menjadi pelindung bagi mereka yang lebih lemah. Estetika dan keindahan penting bagi mereka, dan mereka sering memiliki talenta artistik. Mereka adalah orang yang dapat dipercaya dan bertanggung jawab, yang sering dimintai nasihat.

Namun, mereka perlu belajar untuk menetapkan batasan dan tidak terlalu banyak mengorbankan diri. Kecenderungan mereka untuk mengontrol atau mencampuri dapat membuat mereka terlihat menggurui. Dalam karir, mereka unggul dalam peran yang melibatkan pelayanan, konseling, pengajaran, atau pekerjaan kesehatan.`
            },
            7: {
                title: "Tanggal Lahir Anda Berada Pada Garis Hidup 7",
                content: `Orang dengan garis hidup 7 adalah pencari kebenaran yang analitis dan introspektif. Mereka memiliki pikiran yang mendalam dan keinginan kuat untuk memahami misteri kehidupan. Spiritualitas dan filosofi sering menarik bagi mereka, dan mereka menghabiskan banyak waktu dalam kontemplasi dan refleksi.

Mereka sangat intuitif dan memiliki kemampuan untuk melihat di bawah permukaan hal-hal. Privasi dan waktu sendirian penting bagi mereka untuk mengisi ulang energi mereka. Mereka seringkali perfeksionis dengan standar tinggi untuk diri mereka sendiri dan orang lain.

Namun, mereka bisa terlalu terpisah atau sulit dipahami oleh orang lain. Mereka perlu belajar untuk lebih terbuka dan berbagi pikiran mereka dengan orang lain. Kecenderungan mereka untuk terlalu menganalisis dapat membuat mereka terjebak dalam pikiran mereka sendiri. Dalam karir, mereka unggul dalam penelitian, analisis, pengajaran spiritual, atau bidang ilmiah.`
            },
            8: {
                title: "Tanggal Lahir Anda Berada Pada Garis Hidup 8",
                content: `Orang dengan garis hidup 8 adalah achiever yang kuat dengan ambisi besar untuk sukses material. Mereka memiliki kemampuan luar biasa untuk mengelola bisnis dan keuangan, dengan pemahaman intuitif tentang kekuatan dan otoritas. Mereka adalah pemimpin alami yang dapat mengorganisir dan mengarahkan orang lain menuju tujuan bersama.

Mereka sangat efisien dan praktis, dengan kemampuan untuk melihat gambaran besar sambil memperhatikan detail penting. Mereka memiliki stamina dan determinasi untuk mengatasi rintangan besar. Kesuksesan dan pengakuan penting bagi mereka, dan mereka tidak takut bekerja keras untuk mencapainya.

Namun, mereka perlu belajar keseimbangan antara kehidupan material dan spiritual. Kecenderungan mereka untuk terlalu fokus pada kesuksesan material dapat membuat mereka mengabaikan aspek penting lainnya dari kehidupan. Mereka juga perlu berhati-hati dengan kecenderungan untuk mendominasi atau manipulasi. Dalam karir, mereka unggul dalam bisnis, keuangan, real estate, atau posisi eksekutif.`
            },
            9: {
                title: "Tanggal Lahir Anda Berada Pada Garis Hidup 9",
                content: `Orang dengan garis hidup 9 adalah humanis yang idealis dengan visi untuk membuat dunia menjadi tempat yang lebih baik. Mereka memiliki kasih sayang universal dan kepedulian mendalam untuk kesejahteraan umat manusia. Mereka sering terlibat dalam kegiatan amal atau pekerjaan sosial yang membuat perbedaan positif.

Mereka memiliki pemahaman yang luas tentang kehidupan dan kemampuan untuk melihat koneksi antara semua hal. Mereka sangat kreatif dan seringkali memiliki talenta artistik. Kepribadian mereka yang hangat dan menerima membuat orang merasa nyaman di sekitar mereka.

Namun, mereka perlu belajar untuk membiarkan hal-hal pergi dan tidak terlalu terikat pada hasil. Idealisme mereka kadang-kadang dapat membuat mereka kecewa ketika realitas tidak sesuai dengan harapan mereka. Mereka juga perlu belajar untuk menjaga diri mereka sendiri sementara membantu orang lain. Dalam karir, mereka unggul dalam peran yang melibatkan pelayanan kemanusiaan, seni, pengajaran, atau pekerjaan non-profit.`
            }
        };
        
        return messages[number] || { title: "Tidak diketahui", content: "" };
    }
    

    $('#kirim').on('click', function() {
        const tanggal = parseInt($('#tanggal').val());
        const bulan = parseInt($('#bulan').val());
        const tahun = parseInt($('#tahun').val());
        

        if (!tanggal || !bulan || !tahun) {
            alert('Mohon lengkapi semua data tanggal lahir!');
            return;
        }
        

        const result = calculateLifePath(tanggal, bulan, tahun);
        

        $('#output-tanggal').val(tanggal);
        $('#output-bulan').val(bulan);
        $('#output-tahun').val(tahun);
        $('#output-hasil1').val(result.hasil1);
        $('#output-hasil2').val(result.hasil2);
        $('#output-hasil-akhir').val(result.hasilAkhir);
        

        const message = getLifePathMessage(result.hasilAkhir);
        $('#result-message').html(`
            <h2>${message.title}</h2>
            ${message.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        `).fadeIn();
        

        $('html, body').animate({
            scrollTop: $('#result-message').offset().top - 100
        }, 500);
    });

    $('#reset').on('click', function() {
        $('#tanggal').val('');
        $('#bulan').val('');
        $('#tahun').val('');
        $('#output-tanggal').val('');
        $('#output-bulan').val('');
        $('#output-tahun').val('');
        $('#output-hasil1').val('');
        $('#output-hasil2').val('');
        $('#output-hasil-akhir').val('');
        $('#result-message').fadeOut();
    });
    
    // Event handler untuk Enter key
    $('select').on('keypress', function(e) {
        if (e.which === 13) {
            $('#kirim').click();
        }
    });
});