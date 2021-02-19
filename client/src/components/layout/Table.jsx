import React from 'react';
const Table = () => {
  return (
    
    <div class="col w-full">
          <h3 class="text-gray-800 text-xl font-normal">Billings</h3>
      <div class="ant-card-body">
        <div class="ant-table-wrapper">
          <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
              <div class="ant-table">
                <div class="ant-table-container">
                  <div class="ant-table-content">
                    <table style={{tableLayout: "auto"}}>
                      <colgroup></colgroup>
                      <thead class="ant-table-thead">
                        <tr>
                          <th class="ant-table-cell text-align-rigth ant-table-column-has-sorters">
                            <div class="ant-table-column-sorters-with-tooltip">
                              <div class="ant-table-column-sorters">
                                <span>Bill #</span>
                                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                                  <span class="ant-table-column-sorter-inner">
                                    <span
                                      role="img"
                                      aria-label="caret-up"
                                      class="anticon anticon-caret-up ant-table-column-sorter-up"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        class=""
                                        data-icon="caret-up"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                      </svg>
                                    </span>
                                    <span
                                      role="img"
                                      aria-label="caret-down"
                                      class="anticon anticon-caret-down ant-table-column-sorter-down"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        class=""
                                        data-icon="caret-down"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </th>
                          <th class="ant-table-cell ant-table-column-has-sorters">
                            <div class="ant-table-column-sorters-with-tooltip">
                              <div class="ant-table-column-sorters">
                                <span>Patient</span>
                                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                                  <span class="ant-table-column-sorter-inner">
                                    <span
                                      role="img"
                                      aria-label="caret-up"
                                      class="anticon anticon-caret-up ant-table-column-sorter-up"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        class=""
                                        data-icon="caret-up"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                      </svg>
                                    </span>
                                    <span
                                      role="img"
                                      aria-label="caret-down"
                                      class="anticon anticon-caret-down ant-table-column-sorter-down"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        class=""
                                        data-icon="caret-down"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </th>
                          <th class="ant-table-cell ant-table-column-has-sorters">
                            <div class="ant-table-column-sorters-with-tooltip">
                              <div class="ant-table-column-sorters">
                                <span>Doctor</span>
                                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                                  <span class="ant-table-column-sorter-inner">
                                    <span
                                      role="img"
                                      aria-label="caret-up"
                                      class="anticon anticon-caret-up ant-table-column-sorter-up"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        class=""
                                        data-icon="caret-up"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                      </svg>
                                    </span>
                                    <span
                                      role="img"
                                      aria-label="caret-down"
                                      class="anticon anticon-caret-down ant-table-column-sorter-down"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        class=""
                                        data-icon="caret-down"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </th>
                          <th class="ant-table-cell nowrap ant-table-column-sort ant-table-column-has-sorters">
                            <div class="ant-table-column-sorters-with-tooltip">
                              <div class="ant-table-column-sorters">
                                <span>Date</span>
                                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                                  <span class="ant-table-column-sorter-inner">
                                    <span
                                      role="img"
                                      aria-label="caret-up"
                                      class="anticon anticon-caret-up ant-table-column-sorter-up"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        class=""
                                        data-icon="caret-up"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                      </svg>
                                    </span>
                                    <span
                                      role="img"
                                      aria-label="caret-down"
                                      class="anticon anticon-caret-down ant-table-column-sorter-down active"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        class=""
                                        data-icon="caret-down"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </th>
                          <th class="ant-table-cell">Charges</th>
                          <th class="ant-table-cell">Tax</th>
                          <th class="ant-table-cell">Discount</th>
                          <th class="ant-table-cell">Total</th>
                        </tr>
                      </thead>
                      <tbody class="ant-table-tbody">
                        <tr
                          data-row-key="132"
                          class="ant-table-row ant-table-row-level-0"
                        >
                          <td class="ant-table-cell text-align-rigth">
                            <span class="text-right text-color-200">132</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-align-left">Priya Patel</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-left">Juan Freeman</span>
                          </td>
                          <td class="ant-table-cell nowrap ant-table-column-sort">
                            <span class="text-align-left text-color-200">
                              18 Feb 2019
                            </span>
                          </td>
                          <td class="ant-table-cell">155$</td>
                          <td class="ant-table-cell">10%</td>
                          <td class="ant-table-cell">5$</td>
                          <td class="ant-table-cell">
                            <b>160$</b>
                          </td>
                        </tr>
                        <tr
                          data-row-key="131"
                          class="ant-table-row ant-table-row-level-0"
                        >
                          <td class="ant-table-cell text-align-rigth">
                            <span class="text-right text-color-200">131</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-align-left">Mayank Jani</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-left">Christina Thomas</span>
                          </td>
                          <td class="ant-table-cell nowrap ant-table-column-sort">
                            <span class="text-align-left text-color-200">
                              17 Feb 2019
                            </span>
                          </td>
                          <td class="ant-table-cell">121$</td>
                          <td class="ant-table-cell">10%</td>
                          <td class="ant-table-cell">5$</td>
                          <td class="ant-table-cell">
                            <b>125$</b>
                          </td>
                        </tr>
                        <tr
                          data-row-key="130"
                          class="ant-table-row ant-table-row-level-0"
                        >
                          <td class="ant-table-cell text-align-rigth">
                            <span class="text-right text-color-200">130</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-align-left">Jenish Shah</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-left">Juan Freeman</span>
                          </td>
                          <td class="ant-table-cell nowrap ant-table-column-sort">
                            <span class="text-align-left text-color-200">
                              17 Feb 2019
                            </span>
                          </td>
                          <td class="ant-table-cell">70$</td>
                          <td class="ant-table-cell">10%</td>
                          <td class="ant-table-cell">5$</td>
                          <td class="ant-table-cell">
                            <b>75$</b>
                          </td>
                        </tr>
                        <tr
                          data-row-key="129"
                          class="ant-table-row ant-table-row-level-0"
                        >
                          <td class="ant-table-cell text-align-rigth">
                            <span class="text-right text-color-200">129</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-align-left">Jayna Sharma</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-left">Jessica Patterson</span>
                          </td>
                          <td class="ant-table-cell nowrap ant-table-column-sort">
                            <span class="text-align-left text-color-200">
                              16 Feb 2019
                            </span>
                          </td>
                          <td class="ant-table-cell">45$</td>
                          <td class="ant-table-cell">10%</td>
                          <td class="ant-table-cell">5$</td>
                          <td class="ant-table-cell">
                            <b>48$</b>
                          </td>
                        </tr>
                        <tr
                          data-row-key="128"
                          class="ant-table-row ant-table-row-level-0"
                        >
                          <td class="ant-table-cell text-align-rigth">
                            <span class="text-right text-color-200">128</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-align-left">Sonali Malik</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-left">Lori Perkins</span>
                          </td>
                          <td class="ant-table-cell nowrap ant-table-column-sort">
                            <span class="text-align-left text-color-200">
                              15 Feb 2019
                            </span>
                          </td>
                          <td class="ant-table-cell">120$</td>
                          <td class="ant-table-cell">10%</td>
                          <td class="ant-table-cell">5$</td>
                          <td class="ant-table-cell">
                            <b>124$</b>
                          </td>
                        </tr>
                        <tr
                          data-row-key="133"
                          class="ant-table-row ant-table-row-level-0"
                        >
                          <td class="ant-table-cell text-align-rigth">
                            <span class="text-right text-color-200">133</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-align-left">Mayank Jani</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-left">Jessica Patterson</span>
                          </td>
                          <td class="ant-table-cell nowrap ant-table-column-sort">
                            <span class="text-align-left text-color-200">
                              13 Feb 2019
                            </span>
                          </td>
                          <td class="ant-table-cell">25$</td>
                          <td class="ant-table-cell">10%</td>
                          <td class="ant-table-cell">5$</td>
                          <td class="ant-table-cell">
                            <b>27$</b>
                          </td>
                        </tr>
                        <tr
                          data-row-key="134"
                          class="ant-table-row ant-table-row-level-0"
                        >
                          <td class="ant-table-cell text-align-rigth">
                            <span class="text-right text-color-200">134</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-align-left">Pooja Patel</span>
                          </td>
                          <td class="ant-table-cell">
                            <span class="text-left">Juan Freeman</span>
                          </td>
                          <td class="ant-table-cell nowrap ant-table-column-sort">
                            <span class="text-align-left text-color-200">
                              13 Feb 2019
                            </span>
                          </td>
                          <td class="ant-table-cell">320$</td>
                          <td class="ant-table-cell">10%</td>
                          <td class="ant-table-cell">5$</td>
                          <td class="ant-table-cell">
                            <b>340$</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
