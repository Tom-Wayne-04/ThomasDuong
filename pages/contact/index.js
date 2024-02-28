//components
import Circles from '../../components/Circles';

//icons
import { BsArrowRight } from 'react-icons/bs'

//framer
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../../variants'

const downloadCV = () => {
  // Thay đổi 'your-cv.pdf' thành đường dẫn của tệp tin CV trên máy của bạn
  const cvPath = "D:/MyWeb/ethan-portfolio-starter/public/DuongSiBinh_CV.pdf";
  // Tạo một phần tử <a> ẩn
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'your-cv.pdf'; // Tên tập tin tải xuống
  // Thêm phần tử <a> vào body
  document.body.appendChild(link);
  // Kích hoạt sự kiện click trên phần tử <a> để tải xuống CV
  link.click();
  // Loại bỏ phần tử <a> sau khi tải xuống hoàn tất
  document.body.removeChild(link);
};

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
            Let us <span className='text accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' />
              <input type='text' placeholder='email' className='input' />
            </div>
            <input type='text' placeholder='subject' className='input' />
            <textarea placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center
          overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let us talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex 
            group-hover:-translate-y-0 group-hover:opacity-100 transition-all
            duration-300 absolute text-[22px]'/>
            </button>
            {/* Download CV */}
            <button
             className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center
          overflow-hidden hover:border-accent group'
            onClick={downloadCV}>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Download my CV</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex 
            group-hover:-translate-y-0 group-hover:opacity-100 transition-all
            duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
