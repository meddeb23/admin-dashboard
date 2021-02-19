import React from "react";
import Table from "../layout/Table"
const ClientEdit = () => {
//input design
const input = `bg-gray-200 rounded-full px-3 py-1 hover:shadow-xl transform ease-linear duration-150 
focus:bg-white border-transparent focus:border-blue-400 border-2 outline-none w-full mb-2`;

const labelText = `text-lg font-medium text-gray-700`;
const timeText =`text-gray-400 font-thin text-base`;
const title1 =`m-0 text-gray-800 font-bold text-xl `;
const parag1 = `text-base font-thin text-gray-800`;
    return (
<div class="" >
 <div class="p-4">
      <div class="row mb-4">
        <div class="col-md-6 col-sm-12">
          <div class="header mb-3">
            <h6 class="mt-0 mb-3 text-xl font-medium text-gray-700 ">Photo</h6>
            <input type="file" style={{display: "none" }}/>
            <div class="d-flex align-items-center">
              <span  style={{width: '100px',height: '100px', lineHeight: '100px', fontSize: '18px'}}
              class=" pr-3"  >
                <img class="rounded-full"
                src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
              </span>
              <button type="button" class="bg-blue-500 px-3 py-2 rounded-md text-md text-white font-normal
              hover:shadow-md hover:bg-blue-600 shadow-md">
                <span>Select image </span>
                <span class="icofont icofont-ui-user ml-2"></span>
              </button>
            </div>
          </div>
          <div class="info stack">
            <form class="">
              <div class="">
                <div class="">
                  <label class={labelText} title="Full name">
                    Full name
                  </label>
                </div>
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <input
                        placeholder="Full name"
                        type="text"
                        class={input}
                        value="Liam Jouns"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item">
                <div class="ant-col ant-form-item-label">
                  <label class={labelText} title="Id">
                    Id
                  </label>
                </div>
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <input
                        placeholder="Id"
                        type="text"
                        class={input}
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <div class="ant-row ant-form-item">
                    <div class="ant-col ant-form-item-label">
                      <label class={labelText} title="Age">
                        Age
                      </label>
                    </div>
                    <div class="ant-col ant-form-item-control">
                      <div class="ant-form-item-control-input">
                        <div class="ant-form-item-control-input-content">
                          <input
                            placeholder="Age"
                            type="text"
                            class={input}
                            value="42"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="ant-row ant-form-item">
                    <div class="ant-col ant-form-item-label">
                      <label class={labelText} title="Gender">
                        Gender
                      </label>
                    </div>
                    <div class="ant-col ant-form-item-control">
                      <div class="ant-form-item-control-input">
                        <div class="ant-form-item-control-input-content">
                          <div class="ant-select ant-select-single ant-select-show-arrow">
                            <div class="ant-select-selector">
                              <span class="ant-select-selection-search">
                                <input
                                  autocomplete="off"
                                  class={input}
                                  role="combobox"
                                  aria-haspopup="listbox"
                                  aria-owns="rc_select_13_list"
                                  aria-autocomplete="list"
                                  aria-controls="rc_select_13_list"
                                  aria-activedescendant="rc_select_13_list_0"
                                  readonly=""
                                  unselectable="on"
                                  value=""
                                  id="rc_select_13"
                                  style={{opacity: '0'}}
                                />
                              </span>
                              <span
                                class="ant-select-selection-item"
                                title="Male"
                              >
                                Male
                              </span>
                            </div>
                            <span
                              class="ant-select-arrow"
                              unselectable="on"
                              aria-hidden="true"
                              style={{userSelect: 'none'}}
                            >
                              <span
                                role="img"
                                aria-label="down"
                                class="anticon anticon-down ant-select-suffix"
                              >
                                <svg
                                  viewBox="64 64 896 896"
                                  focusable="false"
                                  class=""
                                  data-icon="down"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item">
                <div class="ant-col ant-form-item-label">
                  <label class={labelText} title="Phone">
                    Phone
                  </label>
                </div>

                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <input
                        placeholder="Phone"
                        type="text"
                        class={input}
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row">
                <div class="ant-col">
                  <label class={labelText} title="Address">
                    Address
                  </label>
                </div>
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <textarea
                        rows="4"
                        placeholder="Address"
                        class='bg-gray-200 rounded-xl px-3 py-1 hover:shadow-xl transform ease-linear duration-150 
                        focus:bg-white border-transparent focus:border-blue-400 border-2 outline-none w-full mb-2'
                      >
                        71 Pilgrim Avenue Chevy Chase, MD 20815
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item">
                <div class="ant-col ant-form-item-label">
                  <label class={labelText} title="Last visit">
                    Last visit
                  </label>
                </div>
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <input
                        placeholder="Last visit"
                        readonly=""
                        type="text"
                        class={input}
                        value="18 Dec 2018"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-row ant-form-item">
                <div class="ant-col ant-form-item-label">
                  <label class={labelText} title="Status">
                    Status
                  </label>
                </div>
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <div class="ant-select ant-select-single ant-select-show-arrow">
                        <div class="ant-select-selector">
                          <span class="ant-select-selection-search">
                            <input
                              autocomplete="off"
                              class={input}
                              role="combobox"
                              aria-haspopup="listbox"
                              aria-owns="rc_select_14_list"
                              aria-autocomplete="list"
                              aria-controls="rc_select_14_list"
                              aria-activedescendant="rc_select_14_list_0"
                              readonly=""
                              unselectable="on"
                              value=""
                              id="rc_select_14"
                              style={{opacity: '0'}}
                            />
                          </span>
                          <span
                            class="ant-select-selection-item"
                            title="Approved"
                          >
                            Approved
                          </span>
                        </div>
                        <span
                          class="ant-select-arrow"
                          unselectable="on"
                          aria-hidden="true"
                          style={{userSelect: 'none'}}
                        >
                          <span
                            role="img"
                            aria-label="down"
                            class="anticon anticon-down ant-select-suffix"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              class=""
                              data-icon="down"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <button type="button" class="bg-blue-600 px-3 py-2 rounded-md text-md text-white font-normal
              hover:shadow-md hover:bg-blue-700 w-full">
              <span>Save Changes</span>
            </button>
          </div>
        </div>
        {/* time line */}
        <div class="col-md-6 col-sm-12">
          <div class="ant-card ant-card-bordered">
            <div class="ant-card-body">
              <ul class="ant-timeline ant-timeline-left">
                <li class="ant-timeline-item ant-timeline-item-left">
                  <div class="ant-timeline-item-tail"></div>
                  <div class="ant-timeline-item-head ant-timeline-item-head-red"></div>
                  <div class="ant-timeline-item-content">
                    <div class="d-flex flex-column">
                      <h4 class={title1}>New prescription</h4>
                      <span class={timeText}>Now</span>
                      <span class={parag1}>
                        Aenean lacinia bibendum nulla sed consectetur. Nullam id
                        dolor id nibh ultricies vehicula ut id elit.
                      </span>
                    </div>
                  </div>
                </li>
                <li class="ant-timeline-item ant-timeline-item-left">

                <div class="rounded-full bg-green-500 w-4 h-4"></div>
                  <div class="ant-timeline-item-tail"></div>
                  <div class="ant-timeline-item-content">
                    <div class="d-flex flex-column">
                      <h4 class={title1}>Appointment</h4>
                      <span class={timeText}>2m ago</span>
                      <span class={parag1}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequuntur nam nisi veniam.
                      </span>
                    </div>
                  </div>
                </li>
                <li class="ant-timeline-item ant-timeline-item-left">
                  <div class="ant-timeline-item-tail"></div>
                  <div
                    class="ant-timeline-item-head ant-timeline-item-head-yellow"
                    style={{borderColor: 'yellow'}}
                  ></div>
                  <div class="ant-timeline-item-content">
                    <div class="d-flex flex-column">
                      <h4 class="m-0">Medication</h4>
                      <span class="text-base text-color-100">2h ago</span>
                      <span class="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequuntur nam nisi veniam.
                      </span>
                    </div>
                  </div>
                </li>
                <li class="ant-timeline-item ant-timeline-item-left">
                  <div class="ant-timeline-item-tail"></div>
                  <div
                    class="ant-timeline-item-head ant-timeline-item-head-pink"
                    style={{borderColor: 'pink'}}
                  ></div>
                  <div class="ant-timeline-item-content">
                    <div class="d-flex flex-column">
                      <h4 class="m-0">Operation</h4>
                      <span class="text-base text-color-100">15h ago</span>
                      <span class="text-base">
                        Aenean lacinia bibendum nulla sed consectetur. Nullam id
                        dolor id nibh ultricies vehicula ut id elit.
                      </span>
                    </div>
                  </div>
                </li>
                <li class="ant-timeline-item ant-timeline-item-left">
                  <div class="ant-timeline-item-tail"></div>
                  <div class="ant-timeline-item-head ant-timeline-item-head-blue"></div>
                  <div class="ant-timeline-item-content">
                    <div class="d-flex flex-column">
                      <h4 class="m-0">New patient</h4>
                      <span class="text-base text-color-100">Jul 10</span>
                      <span class="text-base">Lorem ipsum dolor sit.</span>
                    </div>
                  </div>
                </li>
                <li class="ant-timeline-item ant-timeline-item-left">
                  <div class="ant-timeline-item-tail"></div>
                  <div class="ant-timeline-item-head ant-timeline-item-head-red"></div>
                  <div class="ant-timeline-item-content">
                    <div class="d-flex flex-column">
                      <h4 class="m-0">Examination</h4>
                      <span class="text-base text-color-100">Jul 11</span>
                      <span class="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequuntur nam nisi veniam.
                      </span>
                    </div>
                  </div>
                </li>
                <li class="">
                  <div class=""></div>
                  <div class=""></div>
                  <div class="">
                    <div class="d-flex">
                      <h4 class="m-0">Re-Examination</h4>
                      <span class="text-base text-color-100">Jul 25</span>
                      <span class="text-base">
                        Aenean lacinia bibendum nulla sed consectetur. Nullam id
                        dolor id nibh ultricies vehicula ut id elit.
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  {/* table */}
  <Table />
    </div>
        
    </div>
   
  );
};

export default ClientEdit;
