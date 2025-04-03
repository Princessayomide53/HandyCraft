import CustomButton from '@/components/Common/CustomButton';
import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className='max-w-7xl mx-auto flex justify-between mt-[4.5rem] h-[38rem]'>
      <article>
        <h4 className='leading-normal font-bold text-[#032D55] text-[2.5rem]'>
          We would like to
          <br /> hear from you
        </h4>
        <span className='mt-[1.13rem] space-y-[0.7rem]'>
          <span className='flex gap-3 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='18'
              viewBox='0 0 20 18'
              fill='none'
            >
              <g clip-path='url(#clip0_5428_5964)'>
                <path
                  d='M17.5982 16.2458L1.85649 16.285C0.851444 16.2875 0.0381166 15.4782 0.0356105 14.4732L0.00843542 3.57508C0.00592928 2.57003 0.81521 1.7567 1.82026 1.7542L17.562 1.71495C18.567 1.71244 19.3804 2.52172 19.3829 3.52677L19.41 14.4249C19.4125 15.4299 18.6033 16.2433 17.5982 16.2458ZM1.82328 2.9651C1.48423 2.96595 1.21849 3.23301 1.21934 3.57206L1.24651 14.4702C1.24736 14.8092 1.51442 15.075 1.85347 15.0741L17.5952 15.0349C17.9342 15.034 18.2 14.767 18.1991 14.4279L18.172 3.52979C18.1711 3.19074 17.904 2.925 17.565 2.92585L1.82328 2.9651Z'
                  fill='#032D55'
                />
                <path
                  d='M9.71295 11.3734C8.86532 11.3755 8.0895 11.0384 7.50673 10.4223L1.13265 3.68131C0.901972 3.43971 0.913114 3.05219 1.15472 2.82151C1.39633 2.59084 1.78385 2.60198 2.01452 2.84359L8.3886 9.58456C9.08066 10.3215 10.34 10.3184 11.0284 9.57798L17.3688 2.81741C17.5982 2.57466 17.9857 2.56158 18.2285 2.79105C18.4712 3.02052 18.4843 3.40797 18.2548 3.65073L11.9144 10.4234C11.3347 11.0424 10.5606 11.3834 9.71298 11.3855L9.71295 11.3734Z'
                  fill='#032D55'
                />
              </g>
              <defs>
                <clipPath id='clip0_5428_5964'>
                  <rect
                    width='19.3745'
                    height='16.9527'
                    fill='white'
                    transform='translate(0 0.547852) rotate(-0.14287)'
                  />
                </clipPath>
              </defs>
            </svg>
            <p className='text-[#09A0B1]  text-base font-medium leading-normal'>
              hello@davidsoninitiative.org
            </p>
          </span>
          <span className='flex gap-3 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='20'
              viewBox='0 0 12 20'
              fill='none'
            >
              <path
                d='M9.6 1.60002C9.91826 1.60002 10.2235 1.72645 10.4485 1.9515C10.6736 2.17654 10.8 2.48176 10.8 2.80002V17.2C10.8 17.5183 10.6736 17.8235 10.4485 18.0486C10.2235 18.2736 9.91826 18.4 9.6 18.4H2.4C2.08174 18.4 1.77652 18.2736 1.55147 18.0486C1.32643 17.8235 1.2 17.5183 1.2 17.2V2.80002C1.2 2.48176 1.32643 2.17654 1.55147 1.9515C1.77652 1.72645 2.08174 1.60002 2.4 1.60002H9.6ZM2.4 0.400024C1.76348 0.400024 1.15303 0.652881 0.702944 1.10297C0.252856 1.55306 0 2.1635 0 2.80002V17.2C0 17.8365 0.252856 18.447 0.702944 18.8971C1.15303 19.3472 1.76348 19.6 2.4 19.6H9.6C10.2365 19.6 10.847 19.3472 11.2971 18.8971C11.7471 18.447 12 17.8365 12 17.2V2.80002C12 2.1635 11.7471 1.55306 11.2971 1.10297C10.847 0.652881 10.2365 0.400024 9.6 0.400024L2.4 0.400024Z'
                fill='#032D55'
              />
              <path
                d='M6.00078 17.2C6.31904 17.2 6.62427 17.0736 6.84931 16.8486C7.07435 16.6235 7.20078 16.3183 7.20078 16C7.20078 15.6818 7.07435 15.3766 6.84931 15.1515C6.62427 14.9265 6.31904 14.8 6.00078 14.8C5.68252 14.8 5.3773 14.9265 5.15225 15.1515C4.92721 15.3766 4.80078 15.6818 4.80078 16C4.80078 16.3183 4.92721 16.6235 5.15225 16.8486C5.3773 17.0736 5.68252 17.2 6.00078 17.2Z'
                fill='#032D55'
              />
            </svg>
            <p className='text-[#09A0B1]  text-base font-medium leading-normal'>
              (123) 456 789
            </p>
          </span>
        </span>
        <p className='text-[#032D55] pt-[1.12rem] font-normal text-base leading-normal'>
          Please send us a message and we will get
          <br /> back in touch with you soon.
        </p>
        <div className='flex gap-[1rem] mt-[3rem]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M10.988 3.788C11.9724 2.8034 13.3077 2.25016 14.7 2.25H17.4C17.5989 2.25 17.7897 2.32902 17.9303 2.46967C18.071 2.61032 18.15 2.80109 18.15 3V6.6C18.15 6.79891 18.071 6.98968 17.9303 7.13033C17.7897 7.27098 17.5989 7.35 17.4 7.35H14.7C14.6803 7.35 14.6608 7.35388 14.6426 7.36142C14.6244 7.36896 14.6079 7.38 14.5939 7.39393C14.58 7.40786 14.569 7.4244 14.5614 7.4426C14.5539 7.4608 14.55 7.4803 14.55 7.5V9.45H17.4C17.514 9.44994 17.6266 9.47587 17.729 9.52583C17.8315 9.57579 17.9213 9.64846 17.9915 9.73832C18.0617 9.82817 18.1104 9.93285 18.1341 10.0444C18.1578 10.1559 18.1557 10.2714 18.128 10.382L17.228 13.982C17.1874 14.1443 17.0937 14.2884 16.9618 14.3913C16.8299 14.4942 16.6673 14.5501 16.5 14.55H14.55V21C14.55 21.1989 14.471 21.3897 14.3303 21.5303C14.1897 21.671 13.9989 21.75 13.8 21.75H10.2C10.0011 21.75 9.81032 21.671 9.66967 21.5303C9.52902 21.3897 9.45 21.1989 9.45 21V14.55H7.5C7.30109 14.55 7.11032 14.471 6.96967 14.3303C6.82902 14.1897 6.75 13.9989 6.75 13.8V10.2C6.75 10.1015 6.7694 10.004 6.80709 9.91299C6.84478 9.82199 6.90003 9.73931 6.96967 9.66967C7.03931 9.60003 7.12199 9.54478 7.21299 9.50709C7.30398 9.4694 7.40151 9.45 7.5 9.45H9.45V7.5C9.45016 6.10768 10.0034 4.77244 10.988 3.788ZM14.7 3.75C13.7054 3.75 12.7516 4.14509 12.0483 4.84835C11.3451 5.55161 10.95 6.50544 10.95 7.5V10.2C10.95 10.3989 10.871 10.5897 10.7303 10.7303C10.5897 10.871 10.3989 10.95 10.2 10.95H8.25V13.05H10.2C10.3989 13.05 10.5897 13.129 10.7303 13.2697C10.871 13.4103 10.95 13.6011 10.95 13.8V20.25H13.05V13.8C13.05 13.6011 13.129 13.4103 13.2697 13.2697C13.4103 13.129 13.6011 13.05 13.8 13.05H15.914L16.439 10.95H13.8C13.6011 10.95 13.4103 10.871 13.2697 10.7303C13.129 10.5897 13.05 10.3989 13.05 10.2V7.5C13.05 7.06239 13.2238 6.64271 13.5333 6.33327C13.8427 6.02384 14.2624 5.85 14.7 5.85H16.65V3.75H14.7Z'
              fill='#032D55'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
          >
            <path
              d='M14.4418 10.392L22.0363 1.5H20.2363L13.6438 9.2205L8.37578 1.5H2.30078L10.2658 13.176L2.30078 22.5H4.10078L11.0638 14.346L16.6273 22.5H22.7023L14.4418 10.392ZM11.9773 13.278L11.1703 12.1155L4.74878 2.865H7.51328L12.6943 10.3305L13.5013 11.493L20.2378 21.198H17.4733L11.9773 13.278Z'
              fill='#032D55'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
          >
            <path
              d='M12.501 9C11.7054 9 10.9423 9.31607 10.3797 9.87868C9.81707 10.4413 9.501 11.2044 9.501 12C9.501 12.7956 9.81707 13.5587 10.3797 14.1213C10.9423 14.6839 11.7054 15 12.501 15C13.2966 15 14.0597 14.6839 14.6223 14.1213C15.1849 13.5587 15.501 12.7956 15.501 12C15.501 11.2044 15.1849 10.4413 14.6223 9.87868C14.0597 9.31607 13.2966 9 12.501 9ZM12.501 7C13.8271 7 15.0989 7.52678 16.0365 8.46447C16.9742 9.40215 17.501 10.6739 17.501 12C17.501 13.3261 16.9742 14.5979 16.0365 15.5355C15.0989 16.4732 13.8271 17 12.501 17C11.1749 17 9.90315 16.4732 8.96547 15.5355C8.02778 14.5979 7.501 13.3261 7.501 12C7.501 10.6739 8.02778 9.40215 8.96547 8.46447C9.90315 7.52678 11.1749 7 12.501 7ZM19.001 6.75C19.001 7.08152 18.8693 7.39946 18.6349 7.63388C18.4005 7.8683 18.0825 8 17.751 8C17.4195 8 17.1015 7.8683 16.8671 7.63388C16.6327 7.39946 16.501 7.08152 16.501 6.75C16.501 6.41848 16.6327 6.10054 16.8671 5.86612C17.1015 5.6317 17.4195 5.5 17.751 5.5C18.0825 5.5 18.4005 5.6317 18.6349 5.86612C18.8693 6.10054 19.001 6.41848 19.001 6.75ZM12.501 4C10.027 4 9.623 4.007 8.472 4.058C7.688 4.095 7.162 4.2 6.674 4.39C6.26562 4.53994 5.89641 4.78026 5.594 5.093C5.28101 5.3954 5.04035 5.76458 4.89 6.173C4.7 6.663 4.595 7.188 4.559 7.971C4.507 9.075 4.5 9.461 4.5 12C4.5 14.475 4.507 14.878 4.558 16.029C4.595 16.812 4.7 17.339 4.889 17.826C5.059 18.261 5.259 18.574 5.591 18.906C5.928 19.242 6.241 19.443 6.671 19.609C7.165 19.8 7.691 19.906 8.471 19.942C9.575 19.994 9.961 20 12.5 20C14.975 20 15.378 19.993 16.529 19.942C17.311 19.905 17.837 19.8 18.326 19.611C18.734 19.4603 19.1031 19.2201 19.406 18.908C19.743 18.572 19.944 18.259 20.11 17.828C20.3 17.336 20.406 16.81 20.442 16.028C20.494 14.925 20.5 14.538 20.5 12C20.5 9.526 20.493 9.122 20.442 7.971C20.405 7.189 20.299 6.661 20.11 6.173C19.9593 5.76502 19.719 5.39598 19.407 5.093C19.1047 4.77985 18.7355 4.53917 18.327 4.389C17.837 4.199 17.311 4.094 16.529 4.058C15.426 4.006 15.04 4 12.5 4M12.5 2C15.217 2 15.556 2.01 16.623 2.06C17.687 2.11 18.413 2.277 19.05 2.525C19.71 2.779 20.266 3.123 20.822 3.678C21.3305 4.1779 21.724 4.78259 21.975 5.45C22.222 6.087 22.39 6.813 22.44 7.878C22.487 8.944 22.5 9.283 22.5 12C22.5 14.717 22.49 15.056 22.44 16.122C22.39 17.187 22.222 17.912 21.975 18.55C21.7246 19.2178 21.3311 19.8226 20.822 20.322C20.322 20.8303 19.7173 21.2238 19.05 21.475C18.413 21.722 17.687 21.89 16.623 21.94C15.556 21.987 15.217 22 12.5 22C9.783 22 9.444 21.99 8.377 21.94C7.313 21.89 6.588 21.722 5.95 21.475C5.28233 21.2245 4.67753 20.8309 4.178 20.322C3.66943 19.8222 3.27596 19.2175 3.025 18.55C2.777 17.913 2.61 17.187 2.56 16.122C2.512 15.056 2.5 14.717 2.5 12C2.5 9.283 2.51 8.944 2.56 7.878C2.61 6.813 2.777 6.088 3.025 5.45C3.27524 4.78218 3.6688 4.17732 4.178 3.678C4.67767 3.16923 5.28243 2.77573 5.95 2.525C6.587 2.277 7.312 2.11 8.377 2.06C9.445 2.013 9.784 2 12.501 2'
              fill='#032D55'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12.5 2.25C7.115 2.25 2.75 6.615 2.75 12C2.75 17.385 7.115 21.75 12.5 21.75C17.885 21.75 22.25 17.385 22.25 12C22.25 6.615 17.885 2.25 12.5 2.25ZM4.25 12C4.25055 10.2618 4.80007 8.56827 5.82014 7.16092C6.84022 5.75357 8.27873 4.70436 9.93042 4.16298C11.5821 3.62161 13.3626 3.61574 15.0178 4.14621C16.6731 4.67668 18.1185 5.71639 19.1478 7.11699C20.1771 8.51758 20.7378 10.2075 20.7498 11.9456C20.7618 13.6837 20.2245 15.3812 19.2147 16.7959C18.2048 18.2106 16.7739 19.2702 15.1262 19.8235C13.4784 20.3768 11.698 20.3955 10.039 19.877C10.4616 19.2132 10.7977 18.498 11.039 17.749L11.555 15.772C11.7684 16.0766 12.0545 16.3231 12.3874 16.489C12.7203 16.6549 13.0893 16.735 13.461 16.722C15.996 16.722 17.778 14.418 17.778 11.556C17.778 8.807 15.533 6.753 12.654 6.753C9.067 6.753 7.162 9.163 7.162 11.782C7.162 13.005 7.809 14.519 8.848 15.006C9.002 15.077 9.103 15.006 9.127 14.893C9.151 14.78 9.293 14.211 9.358 13.949C9.36807 13.9077 9.36796 13.8645 9.35768 13.8232C9.3474 13.782 9.32727 13.7438 9.299 13.712C8.90637 13.159 8.69848 12.4962 8.705 11.818C8.70292 11.3312 8.79967 10.849 8.98938 10.4006C9.17909 9.95226 9.45781 9.54706 9.80868 9.20957C10.1595 8.87207 10.5753 8.60928 11.0306 8.43713C11.486 8.26497 11.9716 8.18702 12.458 8.208C12.9135 8.18135 13.3695 8.24994 13.797 8.40938C14.2245 8.56883 14.6141 8.81562 14.9408 9.13403C15.2676 9.45244 15.5244 9.83547 15.6949 10.2587C15.8654 10.6819 15.9458 11.136 15.931 11.592C15.931 13.836 14.791 15.398 13.319 15.398C13.1288 15.4125 12.938 15.381 12.7625 15.3061C12.5871 15.2312 12.4323 15.1153 12.3112 14.9679C12.19 14.8206 12.1062 14.6463 12.0666 14.4597C12.0271 14.2731 12.033 14.0798 12.084 13.896C12.168 13.546 12.28 13.185 12.388 12.833C12.585 12.195 12.773 11.588 12.773 11.129C12.7935 10.9798 12.7815 10.8279 12.7378 10.6838C12.6942 10.5396 12.6199 10.4066 12.5201 10.2938C12.4203 10.181 12.2974 10.0911 12.1596 10.0302C12.0219 9.96931 11.8726 9.93888 11.722 9.941C10.89 9.941 10.219 10.808 10.219 11.96C10.213 12.367 10.289 12.771 10.445 13.148L9.465 17.304C9.34521 18.0895 9.34521 18.8885 9.465 19.674C8.81914 19.4181 8.20829 19.0814 7.647 18.672C6.2691 17.6657 5.23426 16.2597 4.683 14.645C4.39528 13.7929 4.24902 12.8994 4.25 12Z'
              fill='#032D55'
            />
          </svg>
        </div>
      </article>
      <article className='flex flex-col gap-[2.1rem]'>
        <div className='flex gap-[2.5rem]'>
          <span className='flex flex-col gap-2'>
            <label className='text-[#26465B] text-lg font-medium leading-[2rem]'>
              Name:{' '}
            </label>

            <input
              type='text'
              name=''
              id=''
              className='w-[18.25rem] pl-5 focus:outline-blue-400 h-[3.125rem] border-2 border-[#E2E2E2] rounded-md'
            />
          </span>
          <span className='flex flex-col gap-2'>
            <label className='text-[#26465B] text-lg font-medium leading-[2rem]'>
              email:{' '}
            </label>
            <input
              type='email'
              name=''
              id=''
              className='w-[18.25rem] pl-5 focus:outline-blue-400 h-[3.125rem] border-2 border-[#E2E2E2] rounded-md'
            />
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[#26465B] text-lg font-medium leading-[2rem]'>
            Message:
          </label>
          <textarea className='w-[38.875rem] pl-5 focus:outline-blue-400 h-[12.5rem] border-2 border-[#E2E2E2]  rounded-md' />
        </div>
        <CustomButton
          text='Send message'
          customStyles='mt-[3rem] w-[14.4375rem] rounded-md bg-[#80F2FF] rounded-xl'
        />
      </article>
    </section>
  );
};

export default Contact;
